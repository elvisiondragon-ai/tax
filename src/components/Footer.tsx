import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/628123456789", "_blank");
  };

  return (
    <footer className="bg-gradient-to-br from-primary-dark to-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Tax El Vision Group</h3>
            <p className="text-primary-foreground/80 mb-4">
              Solusi profesional untuk laporan keuangan dan konsultasi pajak bisnis Anda.
            </p>
            <Button onClick={handleWhatsApp} className="bg-green-600 hover:bg-green-700">
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp Kami
            </Button>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80">+62 812-3456-7890</p>
                  <p className="text-primary-foreground/80">+62 821-9876-5432</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <p className="text-primary-foreground/80">info@taxelvision.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <p className="text-primary-foreground/80">
                  Jl. Gatot Subroto No. 123<br />
                  Jakarta Selatan 12950
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Jam Operasional</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>Senin - Jumat: 09:00 - 17:00</p>
              <p>Sabtu: 09:00 - 13:00</p>
              <p>Minggu & Libur: Tutup</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Tax El Vision Group Consultant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
