import HobbiesNavBar from "@/components/HobbiesNavBar";

export default function HobbiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a]">
      <HobbiesNavBar />
      {/* Container principal avec du padding top pour ne pas passer sous la nav */}
      <div className="pt-24">
        {children}
      </div>
    </div>
  );
}
