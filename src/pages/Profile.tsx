import { Card } from "@/components/ui/card";
import { Target, Eye, Award, Users, TrendingUp, Shield } from "lucide-react";

const Profile = () => {
  const values = [
    {
      icon: Shield,
      title: "Integritas",
      description: "Kami berkomitmen pada kejujuran dan transparansi dalam setiap layanan"
    },
    {
      icon: Award,
      title: "Profesionalisme",
      description: "Standar kerja tertinggi dengan sertifikasi dan keahlian terkini"
    },
    {
      icon: TrendingUp,
      title: "Excellence",
      description: "Selalu memberikan hasil terbaik dan melebihi ekspektasi klien"
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Membangun hubungan jangka panjang berdasarkan kepercayaan"
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-dark to-primary-light text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Profil Tax El Vision Group</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Partner terpercaya untuk solusi laporan keuangan dan perpajakan bisnis Anda
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-center">Tentang Kami</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  <strong className="text-foreground">Tax El Vision Group Consultant</strong> adalah perusahaan konsultan pajak dan keuangan profesional yang telah melayani berbagai skala bisnis selama lebih dari 15 tahun. Kami memahami bahwa setiap bisnis memiliki tantangan unik dalam pengelolaan keuangan dan perpajakan.
                </p>
                <p>
                  Tim kami terdiri dari konsultan pajak berpengalaman, akuntan bersertifikat, dan ahli keuangan yang memiliki keahlian mendalam dalam audit, compliance, dan pembuatan laporan keuangan. Dengan pengalaman menangani lebih dari 300 perusahaan dari berbagai industri, kami telah membangun reputasi sebagai partner yang dapat diandalkan.
                </p>
                <p>
                  Kami percaya bahwa pengelolaan pajak yang tepat bukan hanya tentang compliance, tetapi juga tentang strategi bisnis yang cerdas. Melalui pendekatan yang personal dan solusi yang disesuaikan, kami membantu klien mengoptimalkan kewajiban perpajakan mereka secara legal dan efisien.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Vision */}
            <Card className="p-8">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-dark to-primary-light flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Visi Kami</h3>
              <p className="text-muted-foreground text-lg">
                Menjadi konsultan pajak dan keuangan terdepan di Indonesia yang dipercaya oleh berbagai skala bisnis, memberikan solusi inovatif dan strategis untuk pertumbuhan berkelanjutan setiap klien kami.
              </p>
            </Card>

            {/* Mission */}
            <Card className="p-8">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-dark to-primary-light flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Misi Kami</h3>
              <ul className="space-y-3 text-muted-foreground text-lg">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Memberikan layanan konsultasi perpajakan berkualitas tinggi</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Membantu klien mencapai efisiensi pajak secara legal</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Menjaga compliance penuh terhadap regulasi perpajakan</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Membangun kemitraan jangka panjang yang berkelanjutan</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nilai-Nilai Kami</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Prinsip yang memandu setiap keputusan dan tindakan kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-dark to-primary-light flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Highlight */}
      <section className="py-20 bg-gradient-to-br from-primary-dark to-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pencapaian Kami</h2>
            <p className="text-xl text-white/90">
              Lebih dari satu dekade melayani berbagai skala bisnis
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <p className="text-5xl font-bold mb-2">300+</p>
              <p className="text-white/80">Laporan Keuangan per Tahun</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold mb-2">15+</p>
              <p className="text-white/80">Tahun Pengalaman</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold mb-2">98%</p>
              <p className="text-white/80">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold mb-2">20+</p>
              <p className="text-white/80">Konsultan Profesional</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sertifikasi & Keahlian</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Tim kami memiliki berbagai sertifikasi profesional dan terus mengikuti perkembangan terkini dalam bidang perpajakan dan akuntansi
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Certified Tax Consultant</h3>
                <p className="text-sm text-muted-foreground">Konsultan pajak bersertifikat resmi</p>
              </Card>
              <Card className="p-6">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Certified Public Accountant</h3>
                <p className="text-sm text-muted-foreground">Akuntan publik bersertifikat</p>
              </Card>
              <Card className="p-6">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Member IAI</h3>
                <p className="text-sm text-muted-foreground">Anggota Ikatan Akuntan Indonesia</p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
