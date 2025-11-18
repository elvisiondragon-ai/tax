import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText, Calculator, Shield, ClipboardCheck, FolderOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Pembuatan Laporan Keuangan",
      description: "Kami menyusun laporan keuangan yang akurat, terstruktur, dan sesuai standar akuntansi. Laporan siap untuk audit, perpajakan, dan keperluan internal perusahaan Anda.",
      features: ["Balance Sheet", "Income Statement", "Cash Flow Statement", "Notes to Financial Statements"]
    },
    {
      icon: Calculator,
      title: "Tax Consultant & Planning",
      description: "Konsultasi perpajakan menyeluruh untuk mengoptimalkan beban pajak perusahaan secara legal. Kami membantu perencanaan pajak strategis untuk efisiensi maksimal.",
      features: ["Tax Planning Strategy", "Tax Optimization", "Tax Compliance Review", "Tax Dispute Resolution"]
    },
    {
      icon: Shield,
      title: "Company Audit Support",
      description: "Dukungan penuh dalam proses audit perusahaan. Kami membantu persiapan dokumen, koordinasi dengan auditor, dan memastikan semua requirement terpenuhi dengan baik.",
      features: ["Pre-audit Preparation", "Document Management", "Auditor Coordination", "Post-audit Follow-up"]
    },
    {
      icon: ClipboardCheck,
      title: "Tax Review dan Compliance",
      description: "Review menyeluruh terhadap kewajiban perpajakan perusahaan untuk memastikan compliance penuh. Identifikasi risiko dan peluang penghematan pajak yang legal.",
      features: ["Tax Health Check", "Compliance Verification", "Risk Assessment", "Corrective Action Plan"]
    },
    {
      icon: FolderOpen,
      title: "Manajemen Dokumen Pajak",
      description: "Pengelolaan sistematis seluruh dokumen perpajakan perusahaan. Memastikan dokumen lengkap, terorganisir, dan mudah diakses saat diperlukan.",
      features: ["Document Organization", "Filing System", "Deadline Management", "Archive Management"]
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-dark to-primary-light text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Layanan Profesional Kami</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Solusi lengkap untuk semua kebutuhan laporan keuangan dan perpajakan bisnis Anda
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
                <div className="grid md:grid-cols-[auto_1fr_auto] gap-6 items-start">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-dark to-primary-light flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4 text-lg">
                      {service.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a href="https://wa.me/62895325633487" target="_blank" rel="noopener noreferrer">
                    <Button className="whitespace-nowrap">
                      Konsultasi Sekarang
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Package Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-primary-dark to-primary text-white shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Paket Lengkap</h2>
                <p className="text-xl text-white/90">
                  Laporan Keuangan + Konsultasi Pajak Profesional
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Yang Anda Dapatkan:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Laporan keuangan lengkap (Neraca, L/R, Arus Kas)</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Konsultasi pajak bulanan</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Review compliance perpajakan</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Dukungan saat audit</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Benefit Tambahan:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Free konsultasi awal</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Update peraturan pajak terbaru</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Dedicated consultant</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span>24/7 email support</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <p className="text-3xl font-bold mb-4">Mulai dari Rp 10.000.000</p>
                <p className="text-white/80 mb-6">Harga disesuaikan dengan skala dan kompleksitas bisnis</p>
                <a href="https://wa.me/62895325633487" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto">
                    Order Sekarang
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mengapa Memilih Layanan Kami?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kami berkomitmen memberikan pelayanan terbaik dengan standar profesional tertinggi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Bersertifikat & Legal</h3>
              <p className="text-muted-foreground">Tim konsultan bersertifikat dengan praktik yang 100% legal dan compliant</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <ClipboardCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Transparansi Penuh</h3>
              <p className="text-muted-foreground">Proses kerja yang jelas dan transparan dengan update berkala</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Hasil Berkualitas</h3>
              <p className="text-muted-foreground">Output yang rapi, akurat, dan siap untuk segala keperluan bisnis</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;