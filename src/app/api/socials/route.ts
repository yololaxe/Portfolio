import { NextResponse } from 'next/server';

// =======================================================================
// CONFIGURATION DES CLÉS API
// =======================================================================

// 1. YOUTUBE
// Obtenez une clé API sur Google Cloud Console (YouTube Data API v3)
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY || ''; 
// L'ID de votre chaîne YouTube (ex: UC_x5XG1OV2P6uZZ5FSM9Ttw)
const YOUTUBE_CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID || 'UCX2anlfyiNFV-STvMTu288A'; 

// 2. TWITTER (X)
// Obtenez un Bearer Token sur le Twitter Developer Portal
const TWITTER_BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN || '';
// Votre ID utilisateur Twitter numérique (pas votre @pseudo)
const TWITTER_USER_ID = process.env.TWITTER_USER_ID || '';

// 3. INSTAGRAM
// Obtenez un jeton d'accès (Access Token) via l'API Instagram Basic Display ou Graph API
const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN || '';

// Cache d'une heure (3600 secondes)
// Attention: Si vous testez avec Next.js dev server, ce cache n'est pas toujours respecté.
export const revalidate = 3600; 

type Post = {
  platform: string;
  handle: string;
  date: string;
  content: string;
  link: string;
  image?: string | null;
  color: string;
  bg: string;
  timestamp: number;
};

export async function GET() {
  const posts: Post[] = [];

  try {
    // --- FETCH YOUTUBE ---
    if (YOUTUBE_API_KEY && YOUTUBE_CHANNEL_ID) {
      try {
        const ytRes = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${YOUTUBE_CHANNEL_ID}&part=snippet,id&order=date&maxResults=3`);
        const ytData = await ytRes.json();
        
        if (ytData.items) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ytData.items.forEach((item: any) => {
            if (item.id && item.id.videoId) {
              posts.push({
                platform: "Youtube",
                handle: "Yololaxe",
                date: new Date(item.snippet.publishedAt).toLocaleDateString('fr-FR'),
                content: item.snippet.title,
                link: `https://www.youtube.com/watch?v=${item.id.videoId}`,
                image: item.snippet.thumbnails?.high?.url || null,
                color: "text-red-600",
                bg: "bg-red-600/10",
                timestamp: new Date(item.snippet.publishedAt).getTime()
              });
            }
          });
        }
      } catch (e) {
        console.error("Erreur YouTube:", e);
      }
    }

    // --- FETCH TWITTER ---
    if (TWITTER_BEARER_TOKEN && TWITTER_USER_ID) {
      try {
        // Ajout de query parameters pour éviter de mettre les clés API en dur dans l'URL
        const twRes = await fetch(`https://api.twitter.com/2/users/${TWITTER_USER_ID}/tweets?tweet.fields=created_at&max_results=5`, {
          headers: { Authorization: `Bearer ${TWITTER_BEARER_TOKEN}` }
        });
        const twData = await twRes.json();

        // Parfois Twitter renvoie une erreur si les quotas sont dépassés ou si l'API est mal configurée
        if (twData.errors) {
            console.error("Erreur API Twitter (Réponse serveur) :", twData.errors);
        }
        
        if (twData.data) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          twData.data.forEach((tweet: any) => {
            posts.push({
              platform: "Twitter",
              handle: "@yololaxe",
              date: new Date(tweet.created_at).toLocaleDateString('fr-FR'),
              content: tweet.text,
              link: `https://twitter.com/yololaxe/status/${tweet.id}`,
              color: "text-blue-400",
              bg: "bg-blue-400/10",
              timestamp: new Date(tweet.created_at).getTime()
            });
          });
        }
      } catch (e) {
        console.error("Erreur Twitter:", e);
      }
    }

    // --- FETCH INSTAGRAM ---
    if (INSTAGRAM_ACCESS_TOKEN) {
      try {
        const igRes = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=${INSTAGRAM_ACCESS_TOKEN}&limit=3`);
        const igData = await igRes.json();
        
        if (igData.error) {
            console.error("Erreur API Instagram (Réponse serveur) :", igData.error);
        }

        if (igData.data) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          igData.data.forEach((media: any) => {
            posts.push({
              platform: "Instagram",
              handle: "@yololaxe",
              date: new Date(media.timestamp).toLocaleDateString('fr-FR'),
              content: media.caption ? media.caption.substring(0, 100) + '...' : 'Nouveau post Instagram',
              link: media.permalink,
              image: (media.media_type === 'IMAGE' || media.media_type === 'CAROUSEL_ALBUM') ? media.media_url : null,
              color: "text-pink-500",
              bg: "bg-pink-500/10",
              timestamp: new Date(media.timestamp).getTime()
            });
          });
        }
      } catch (e) {
        console.error("Erreur Instagram:", e);
      }
    }

    // Si on n'a aucune donnée (API non configurées)
    if (posts.length === 0) {
      return NextResponse.json({
        success: true,
        posts: [
          { platform: "Twitter", handle: "@yololaxe", date: "Il y a 2h", content: "Nouveau devlog de #Renblood en ligne ! On a totalement rework le système de combat... (Ceci est un post de test)", link: "https://twitter.com/yololaxe", color: "text-blue-400", bg: "bg-blue-400/10", timestamp: Date.now() },
          { platform: "Instagram", handle: "@yololaxe", date: "Hier", content: "Sneak peek des nouveaux modèles d'armes en jeu ⚔️ (Ceci est un post de test)", link: "https://www.instagram.com/yololaxe", color: "text-pink-500", bg: "bg-pink-500/10", image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&q=80", timestamp: Date.now() - 86400000 },
          { platform: "Youtube", handle: "Yololaxe", date: "Il y a 3 jours", content: "DEVLOG #12 : Créer un MMORPG sur Minecraft en 2024 ? (Ceci est un post de test)", link: "https://www.youtube.com/@yololaxe", color: "text-red-600", bg: "bg-red-600/10", timestamp: Date.now() - 259200000 }
        ]
      });
    }

    // Trier du plus récent au plus ancien
    posts.sort((a, b) => b.timestamp - a.timestamp);

    return NextResponse.json({ success: true, posts });

  } catch (error) {
    console.error("Erreur générale feed sociaux:", error);
    return NextResponse.json({ success: false, error: "Erreur lors de la récupération des réseaux" }, { status: 500 });
  }
}
