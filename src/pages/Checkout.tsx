import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Package } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Checkout = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    requirements: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.company || !formData.phone) {
      toast({
        title: "Form Tidak Lengkap",
        description: "Mohon lengkapi semua field yang diperlukan",
        variant: "destructive",
      });
      return;
    }

    const whatsappMessage = `Halo, saya ${formData.name} dari ${formData.company}. Saya ingin konsultasi mengenai layanan Tax Consultant. Email saya ${formData.email} dan nomor WhatsApp saya ${formData.phone}. Kebutuhan khusus saya: ${formData.requirements}`;
    const whatsappLink = `https://wa.me/62895325633487?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappLink, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-dark to-primary-light text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Order Layanan Tax Consultant</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Mulai transformasi pengelolaan keuangan dan pajak perusahaan Anda hari ini
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Package Info */}
            <div>
              <Card className="p-8 mb-8 bg-gradient-to-br from-primary-dark to-primary text-white">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Package className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Paket Professional</h3>
                    <p className="text-white/90">Laporan Keuangan + Konsultasi Pajak</p>
                  </div>
                </div>

                <div className="text-4xl font-bold mb-6">
                  Start Rp 10.000.000
                </div>

                <p className="text-white/80 mb-6">
                  *Harga final disesuaikan dengan skala dan kompleksitas bisnis perusahaan Anda
                </p>

                <div className="border-t border-white/20 pt-6">
                  <h4 className="font-semibold mb-4">Paket Termasuk:</h4>
                  <ul className="space-y-3">
                    {[
                      "Laporan keuangan lengkap (Neraca, L/R, Arus Kas)",
                      "Konsultasi pajak bulanan",
                      "Review compliance perpajakan",
                      "Tax planning strategy",
                      "Dukungan saat audit",
                      "Free konsultasi awal",
                      "Dedicated consultant",
                      "24/7 email support"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>

              <Card className="p-6 bg-secondary">
                <h4 className="font-bold mb-3">Proses Setelah Order:</h4>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  <li>1. Tim kami akan menghubungi dalam 1x24 jam</li>
                  <li>2. Konsultasi gratis untuk analisis kebutuhan</li>
                  <li>3. Proposal detail dan timeline kerja</li>
                  <li>4. Mulai pekerjaan setelah agreement</li>
                </ol>
              </Card>
            </div>

            {/* Order Form */}
            <div>
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Form Pemesanan</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Nama Lengkap *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Masukkan nama lengkap Anda"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@perusahaan.com"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="company">Nama Perusahaan *</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="PT/CV Nama Perusahaan"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Nomor WhatsApp *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="08xx xxxx xxxx"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="requirements">Kebutuhan Khusus (Opsional)</Label>
                    <Textarea
                      id="requirements"
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleChange}
                      placeholder="Jelaskan kebutuhan spesifik perusahaan Anda..."
                      rows={4}
                    />
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      Dengan mengklik tombol "Checkout Now", Anda setuju untuk dihubungi oleh tim kami 
                      untuk konsultasi lebih lanjut mengenai layanan yang Anda butuhkan.
                    </p>
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg py-6">
                    Checkout Now
                  </Button>
                </form>
              </Card>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  Butuh bantuan? Hubungi kami:
                </p>
                <Button
                  variant="outline"
                  onClick={() => window.open("https://wa.me/628123456789", "_blank")}
                >
                  Chat via WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
