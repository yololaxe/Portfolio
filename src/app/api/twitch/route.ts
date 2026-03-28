import { NextResponse } from 'next/server';

const CLIENT_ID = process.env.TWITCH_CLIENT_ID || '3o5rb6g1zuycwc9fp2hy8hiw91xact';
const CLIENT_SECRET = process.env.TWITCH_CLIENT_SECRET || 'nsltccb5xt8k386yiieuix1npjflxn';
const TWITCH_USERNAME = 'yololaxe'; 

// On demande à Next.js de garder le résultat en cache pendant 60 secondes 
// pour ne pas spammer l'API Twitch à chaque rechargement de page
export const revalidate = 60; 

export async function GET() {
  try {
    // 1. Obtenir un token d'accès temporaire "App Access Token" depuis Twitch
    const tokenUrl = `https://id.twitch.tv/oauth2/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials`;
    
    const tokenResponse = await fetch(tokenUrl, {
      method: 'POST',
    });

    if (!tokenResponse.ok) {
      throw new Error("Impossible de récupérer le token Twitch");
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // 2. Vérifier si la chaîne (yololaxe) est en direct
    const streamUrl = `https://api.twitch.tv/helix/streams?user_login=${TWITCH_USERNAME}`;
    
    const streamResponse = await fetch(streamUrl, {
      headers: {
        'Client-ID': CLIENT_ID,
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    if (!streamResponse.ok) {
      throw new Error("Impossible de récupérer le statut du stream");
    }

    const streamData = await streamResponse.json();
    
    // Si le tableau 'data' contient quelque chose, c'est que la chaîne est en live !
    const isLive = streamData.data && streamData.data.length > 0;

    return NextResponse.json({ 
      isLive, 
      streamInfo: isLive ? streamData.data[0] : null 
    });

  } catch (error) {
    console.error("Erreur API Twitch:", error);
    // En cas d'erreur (pas de connexion, etc.), on renvoie 'false' pour ne pas bloquer le site
    return NextResponse.json({ isLive: false }, { status: 500 });
  }
}
