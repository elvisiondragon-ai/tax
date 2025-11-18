import { Card } from "@/components/ui/card";
import { Quote, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";
import testimonial5 from "@/assets/testimonial-5.jpg";
import testimonial6 from "@/assets/testimonial-6.jpg";

const Testimony = () => {
  const testimonials = [
    {
      name: "Budi Santoso",
      position: "CEO",
      company: "PT Maju Berkembang",
      image: testimonial1,
      review: "Setelah menggunakan jasa Tax El Vision, beban pajak perusahaan kami terasa jauh lebih ringan. Penataan yang tepat membuat kami bisa menghemat hingga 25% dari beban pajak sebelumnya. Sangat profesional!"
    },
    {
      name: "Siti Nurhaliza",
      position: "Finance Director",
      company: "CV Sukses Mandiri",
      image: testimonial2,
      review: "Laporan keuangan yang dulu terasa rumit, sekarang menjadi sangat rapi dan mudah dipahami. Tim Tax El Vision sangat responsif dan detail. Stress dalam mengurus pajak benar-benar berkurang drastis."
    },
    {
      name: "Ahmad Rizki",
      position: "Managing Director",
      company: "PT Teknologi Nusantara",
      image: testimonial3,
      review: "Penghematan yang kami dapatkan sangat signifikan. Dengan konsultasi yang tepat, kami berhasil mengoptimalkan pajak perusahaan secara legal dan aman. Highly recommended untuk semua business owner!"
    },
    {
      name: "Dewi Lestari",
      position: "Owner",
      company: "Toko Retail Makmur",
      image: testimonial4,
      review: "Sebagai pemilik usaha retail, urusan pajak selalu membuat pusing. Tax El Vision membuat semuanya jadi mudah dan transparan. Laporan tersusun rapi, deadline tidak pernah terlewat, dan beban pajak jadi lebih ringan."
    },
    {
      name: "Rudi Hartono",
      position: "CFO",
      company: "PT Industri Jaya",
      image: testimonial5,
      review: "Kerja sama dengan Tax El Vision memberikan peace of mind untuk tim finance kami. Proses audit jadi lebih smooth, compliance terjaga, dan yang paling penting - kami bisa fokus ke core business."
    },
    {
      name: "Linda Wijaya",
      position: "Business Owner",
      company: "Klinik Sehat Sentosa",
      image: testimonial6,
      review: "Investasi terbaik untuk bisnis kami! Tidak hanya menghemat pajak, tapi juga memberikan insight berharga tentang pengelolaan keuangan yang lebih baik. Tim yang sangat knowledgeable dan helpful."
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-dark to-primary-light text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Klien Kami Mengakuinya</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Pajak terasa jauh lebih ringan setelah dibantu tim Tax El Vision
          </p>
        </div>
      </section>

      {/* Highlight Box */}
      <section className="py-12 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-gradient-to-br from-primary-dark to-primary text-white shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-10 h-10" />
              </div>
              <div className="text-center md:text-left">
                <p className="text-3xl md:text-4xl font-bold mb-2">15-35%</p>
                <p className="text-lg md:text-xl text-white/90">
                  Rata-rata klien menghemat <strong>15–35% beban pajak</strong> setelah penataan yang benar dan konsultasi profesional dari tim kami.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
                <Quote className="w-10 h-10 text-primary mb-4" />
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.review}"
                </p>

                <div className="flex items-center space-x-4 pt-4 border-t">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary"
                  />
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Dipercaya Berbagai Industri</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dari startup hingga perusahaan besar, berbagai industri mempercayakan kebutuhan perpajakan mereka kepada kami
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <p className="text-4xl font-bold text-primary mb-2">300+</p>
              <p className="text-muted-foreground">Klien Aktif</p>
            </Card>
            <Card className="p-6 text-center">
              <p className="text-4xl font-bold text-primary mb-2">98%</p>
              <p className="text-muted-foreground">Satisfaction Rate</p>
            </Card>
            <Card className="p-6 text-center">
              <p className="text-4xl font-bold text-primary mb-2">25%</p>
              <p className="text-muted-foreground">Avg. Tax Savings</p>
            </Card>
            <Card className="p-6 text-center">
              <p className="text-4xl font-bold text-primary mb-2">15+</p>
              <p className="text-muted-foreground">Years Experience</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimony;
