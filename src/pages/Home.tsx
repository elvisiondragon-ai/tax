import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, FileText, Shield, TrendingDown, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const benefits = [
    {
      icon: FileText,
      title: "Laporan Akurat & Siap Audit",
      description: "Laporan keuangan yang rapi, terstruktur, dan siap untuk keperluan audit maupun perpajakan.",
    },
    {
      icon: TrendingDown,
      title: "Meringankan Beban Pajak Anda",
      description: "Optimalisasi pajak yang legal dan tepat untuk mengurangi beban perusahaan Anda.",
    },
    {
      icon: Shield,
      title: "Profesional & Cepat",
      description: "Tim berpengalaman yang bekerja efisien dengan standar profesional tinggi.",
    },
  ];

  const whyChooseUs = [
    "Hemat waktu operasional perusahaan",
    "Laporan keuangan tersusun rapi dan akurat",
    "Dukungan konsultasi pajak berkelanjutan",
    "Tim bersertifikat dan berpengalaman",
    "Harga kompetitif dengan kualitas premium",
    "Proses transparan dan terpercaya",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Tax El Vision Group Consultant
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Solusi Laporan Keuangan & Pajak yang Cepat, Akurat, dan Terpercaya
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/62895325633487" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto">
                  Order Now — Start Rp 10.000.000
                </Button>
              </a>
              <Link to="/services">
                <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 h-auto">
                  Lihat Layanan
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <AspectRatio ratio={9 / 16}>
              <video
                src="https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/admin-image/tax.mp4"
                poster="https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/admin-image/tax.jpg"
                controls
                loop
                playsInline
                className="w-full h-full object-cover rounded-lg"
              />
            </AspectRatio>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Keunggulan Kami</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Kami berkomitmen memberikan solusi terbaik untuk kebutuhan keuangan dan perpajakan bisnis Anda
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary-dark to-primary-light flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Mengapa Perusahaan Memilih Kami
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Lebih dari 300+ perusahaan telah mempercayakan pengelolaan keuangan dan pajak mereka kepada kami. 
                Kami memahami kompleksitas bisnis Anda dan siap memberikan solusi terbaik.
              </p>
              
              <div className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground">{reason}</p>
                  </div>
                ))}
              </div>

              <Link to="/testimony">
                <Button size="lg" className="mt-8">
                  Lihat Testimoni Klien
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center bg-gradient-to-br from-primary-dark to-primary text-white">
                <Users className="w-12 h-12 mx-auto mb-4" />
                <p className="text-4xl font-bold mb-2">300+</p>
                <p className="text-white/90">Klien Aktif</p>
              </Card>
              <Card className="p-6 text-center bg-gradient-to-br from-primary to-primary-light text-white">
                <Clock className="w-12 h-12 mx-auto mb-4" />
                <p className="text-4xl font-bold mb-2">15+</p>
                <p className="text-white/90">Tahun Pengalaman</p>
              </Card>
              <Card className="p-6 text-center bg-gradient-to-br from-primary-light to-accent text-white col-span-2">
                <Shield className="w-12 h-12 mx-auto mb-4" />
                <p className="text-4xl font-bold mb-2">100%</p>
                <p className="text-white/90">Compliance & Legal</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-dark to-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Memulai Konsultasi Pajak Anda?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Dapatkan analisis gratis untuk kebutuhan laporan keuangan dan konsultasi pajak perusahaan Anda
          </p>
          <a href="https://wa.me/62895325633487" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto">
              Mulai Konsultasi Sekarang
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
