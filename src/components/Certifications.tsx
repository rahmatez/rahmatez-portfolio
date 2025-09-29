// import Slider from "react-slick";
import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { CertificationCard } from "./ui/CertificationCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Certificates grouped
const groups = {
  // oracle: [
  //   {
  //     title: "Generative AI Professional",
  //     issuer: "Oracle",
  //     date: "Aug 2025",
  //     image: "/assets/OCI_GEN_AI.jpg",
  //     verifyLink:
  //       "https://catalog-education.oracle.com/ords/certview/sharebadge?id=13AAE10267D0D2036FE44CD7D545D04A6F76BB08DA4D6325B04C2DBBAA70E044",
  //     certLink:
  //       "https://drive.google.com/file/d/12PTrzUzxq66tvm8Lc1osmtXcEHurLx7_/view?usp=sharing",
  //   },
  //   {
  //     title: "Data Science Professional",
  //     issuer: "Oracle",
  //     date: "Sept 2025",
  //     image: "/assets/OCI_DS.jpg",
  //     verifyLink:
  //       "https://catalog-education.oracle.com/pls/certview/sharebadge?id=461201BCB7B5C97A95724C9B7E495B64111BE5E949BAFF7B93AC2FA0AD304D45",
  //     certLink:
  //       "https://drive.google.com/file/d/15aHL14jGyHuhJu3sSQFCd641yc6caf-k/view?usp=sharing",
  //   },
  //   {
  //     title: "AI Foundations Associate",
  //     issuer: "Oracle",
  //     date: "Aug 2025",
  //     image: "/assets/OCI_AI.jpg",
  //     verifyLink:
  //       "https://catalog-education.oracle.com/ords/certview/sharebadge?id=008C99E5E343A1FCD0BC2DE7FDFB7C9FA14EAB6B259439917EB6CD97DF280B0C",
  //     certLink:
  //       "https://drive.google.com/file/d/1f-mk9PQxTagy4bgzIUG4B6EupIvxxWRg/view?usp=sharing",
  //   },
  //   {
  //     title: "Vector Search Certified Professional",
  //     issuer: "Oracle",
  //     date: "Sept 2025",
  //     image: "/assets/OCI_VS.jpg",
  //     verifyLink:
  //       "https://catalog-education.oracle.com/pls/certview/sharebadge?id=A34A3B491F9D977F07DFBD9F86605F286E11E3D77DBB251E21D5566D719338EE",
  //     certLink:
  //       "https://drive.google.com/file/d/1PBvnjPmFP1CyNSUO4nQG0gJ9vBEGTY23/view?usp=sharing",
  //   },
  // ],

  dicoding: [
    {
      title: "AI Praktis untuk Produktivitas",
      issuer: "Dicoding",
      date: "Aug 2025",
      image: "/assets/certificate/AI Praktis untuk Produktivitas-1.png",
      verifyLink: "https://www.dicoding.com/certificates/MRZM6G6MRPYQ",
    },
    {
      title: "Architecting on AWS (Membangun Arsitektur Cloud di AWS)",
      issuer: "Dicoding",
      date: "Aug 2025",
      image: "/assets/certificate/Architecting on AWS (Membangun Arsitektur Cloud di AWS)-1.png",
      verifyLink: "https://www.dicoding.com/certificates/N9ZO2E99RPG5",
    },
    {
      title: "Belajar Back-End Pemula dengan JavaScript",
      issuer: "Dicoding",
      date: "Aug 2025",
      image: "/assets/certificate/Belajar Back-End Pemula dengan JavaScript-1.png",
      verifyLink: "https://www.dicoding.com/certificates/MEPJ25QRLP3V",
    },
    {
      title: "Belajar Dasar AI",
      issuer: "Dicoding",
      date: "Aug 2025",
      image: "/assets/certificate/Belajar Dasar AI-1.png",
      verifyLink: "https://www.dicoding.com/certificates/2VX35NGWJPYQ",
    },
    {
      title: "Belajar Dasar Cloud dan Gen AI di AWS",
      issuer: "Dicoding",
      date: "Aug 2025",
      image: "/assets/certificate/Belajar Dasar Cloud dan Gen AI di AWS-1.png",
      verifyLink: "https://www.dicoding.com/certificates/KEXL24YJ0ZG2",
    },
    {
      title: "Belajar Dasar Data Science",
      issuer: "Dicoding",
      date: "Aug 2025",
      image: "/assets/certificate/Belajar Dasar Data Science-1.png",
      verifyLink: "https://www.dicoding.com/certificates/1OP8JDQYLPQK",
    },
    {
      title: "Belajar Dasar Git dengan GitHub",
      issuer: "Dicoding",
      date: "Aug 2025",
      image: "/assets/certificate/Belajar Dasar Git dengan GitHub-1.png",
      verifyLink: "https://www.dicoding.com/certificates/2VX35NG03PYQ",
    },
    {
      title: "Belajar Dasar Google Cloud",
      issuer: "Dicoding",
      date: "Aug 2025",
      image: "/assets/certificate/Belajar Dasar Google Cloud-1.png",
      verifyLink: "https://www.dicoding.com/certificates/N9ZO2DWDRPG5",
    },
    {
      title: "Belajar Dasar Pemrograman JavaScript",
      issuer: "Dicoding",
      date: "Aug 2025",
      image: "/assets/certificate/Belajar Dasar Pemrograman JavaScript-1.png",
      verifyLink: "https://www.dicoding.com/certificates/4EXG3Y70DZRL",
    },
    {
      title: "Belajar Dasar Pemrograman Web",
      issuer: "Dicoding",
      date: "Aug 2025",
      image: "/assets/certificate/Belajar Dasar Pemrograman Web-1.png",
      verifyLink: "https://www.dicoding.com/certificates/07Z6JL2J2XQR",
    },
    {
      title: "Belajar Dasar Structured Query Language (SQL)",
      issuer: "Dicoding",
      date: "Aug 2025",
      image: "/assets/certificate/Belajar Dasar Structured Query Language (SQL)-1.png",
      verifyLink: "https://www.dicoding.com/certificates/1RXYQ4GGKZVM",
    },
    {
      title: "Belajar Dasar Visualisasi Data",
      issuer: "Dicoding",
      date: "Aug 2025",
      image: "/assets/certificate/Belajar Dasar Visualisasi Data-1.png",
      verifyLink: "https://www.dicoding.com/certificates/81P251EOYPOY",
    },
    {
      title: "Belajar Dasar-Dasar DevOps",
      issuer: "Dicoding",
      date: "Aug 2025",
      image: "/assets/certificate/Belajar Dasar-Dasar DevOps-1.png",
      verifyLink: "https://www.dicoding.com/certificates/53XEKE2EKXRN",
    },
    {
      title: "Belajar Fundamental Aplikasi Web dengan React",
      issuer: "Dicoding",
      date: "Aug 2025",
      image: "/assets/certificate/Belajar Fundamental Aplikasi Web dengan React-1.png",
      verifyLink: "https://www.dicoding.com/certificates/EYX4K2K66PDL",
    },
    {
      title: "Belajar Fundamental Back-End dengan JavaScript",
      issuer: "Dicoding",
      date: "Aug 2025",
      image: "/assets/certificate/Belajar Fundamental Back-End dengan JavaScript-1.png",
      verifyLink: "https://www.dicoding.com/certificates/4EXG36M0QZRL",
    },
    {
      title: "Belajar Fundamental Front-End Web Development",
      issuer: "Dicoding",
      date: "Aug 2025",
      image: "/assets/certificate/Belajar Fundamental Front-End Web Development-1.png",
      verifyLink: "https://www.dicoding.com/certificates/L4PQ23EKOZO1",
    },
    {
      title: "Belajar Membuat Aplikasi Web dengan React",
      issuer: "Dicoding",
      date: "Aug 2025",
      image: "/assets/certificate/Belajar Membuat Aplikasi Web dengan React-1.png",
      verifyLink: "https://www.dicoding.com/certificates/L4PQ24542ZO1",
    },
    {
      title: "Belajar Membuat Front-End Web untuk Pemula",
      issuer: "Dicoding",
      date: "Aug 2025",
      image: "/assets/certificate/Belajar Membuat Front-End Web untuk Pemula-1.png",
      verifyLink: "https://www.dicoding.com/certificates/98XWO638LZM3",
    },
    {
      title: "Belajar Pemrograman Prosedural dengan Python",
      issuer: "Dicoding",
      date: "Aug 2025",
      image: "/assets/certificate/Belajar Pemrograman Prosedural dengan Python-1.png",
      verifyLink: "https://www.dicoding.com/certificates/4EXG396MQZRL",
    },
    {
      title: "Belajar Pengembangan Web Intermediate",
      issuer: "Dicoding",
      date: "Aug 2025",
      image: "/assets/certificate/Belajar Pengembangan Web Intermediate-1.png",
      verifyLink: "https://www.dicoding.com/certificates/JMZVV2DLRZN9",
    },
    {
      title: "Belajar Penggunaan Generative AI",
      issuer: "Dicoding",
      date: "Aug 2025",
      image: "/assets/certificate/Belajar Penggunaan Generative AI-1.png",
      verifyLink: "https://www.dicoding.com/certificates/2VX35NL7JPYQ",
    },
    {
      title: "Belajar Toolset untuk Pengembangan Front-End Web",
      issuer: "Dicoding",
      date: "Aug 2025",
      image: "/assets/certificate/Belajar Toolset untuk Pengembangan Front-End Web-1.png",
      verifyLink: "https://www.dicoding.com/certificates/07Z6JG572XQR",
    },
    {
      title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
      issuer: "Dicoding",
      date: "Aug 2025",
      image: "/assets/certificate/Memulai Dasar Pemrograman untuk Menjadi Pengembang Software-1.png",
      verifyLink: "https://www.dicoding.com/certificates/JMZVVM673ZN9",
    },
    {
      title: "Memulai Pemrograman dengan Python",
      issuer: "Dicoding",
      date: "Aug 2025",
      image: "/assets/certificate/Memulai Pemrograman dengan Python-1.png",
      verifyLink: "https://www.dicoding.com/certificates/1OP8J69JVPQK",
    },
    {
      title: "Meniti Karier sebagai Software Developer",
      issuer: "Dicoding",
      date: "Aug 2025",
      image: "/assets/certificate/Meniti Karier sebagai Software Developer-1.png",
      verifyLink: "https://www.dicoding.com/certificates/1OP8JDQLLPQK",
    },
    {
      title: "Menjadi Node.js Application Developer",
      issuer: "Dicoding",
      date: "Aug 2025",
      image: "/assets/certificate/Menjadi Node.js Application Developer-1.png",
      verifyLink: "https://www.dicoding.com/certificates/07Z6JRW8JXQR",
    },
    {
      title: "Menjadi React Web Developer Expert",
      issuer: "Dicoding",
      date: "Aug 2025",
      image: "/assets/certificate/Menjadi React Web Developer Expert-1.png",
      verifyLink: "https://www.dicoding.com/certificates/07Z6JR1V2XQR",
    },
    {
      title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
      issuer: "Dicoding",
      date: "Aug 2025",
      image: "/assets/certificate/Pengenalan ke Logika Pemrograman (Programming Logic 101)-1.png",
      verifyLink: "https://www.dicoding.com/certificates/MRZM6G3RKPYQ",
    },
    {
      title: "Prompt Engineering untuk Software Developer",
      issuer: "Dicoding",
      date: "Aug 2025",
      image: "/assets/certificate/Prompt Engineering untuk Software Developer-1.png",
      verifyLink: "https://www.dicoding.com/certificates/ERZR25R9QPYV",
    },
  ],
};

export function Certifications() {
  // const sliderSettings = {
  //   dots: true,
  //   arrows: true,
  //   infinite: false,
  //   centerMode: false,
  //   speed: 400,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: false,
  //   responsive: [
  //     { breakpoint: 1024, settings: { slidesToShow: 2 } },
  //     { breakpoint: 768, settings: { slidesToShow: 1 } },
  //   ],
  // };

  return (
    <SectionBackground>
      <section id="certifications" className="space-y-12">
        <div className="container mx-auto px-6 text-left">
          <SectionTitle subtitle="Verified certifications and professional achievements">
            Certifications
          </SectionTitle>

          {/* Oracle */}
          {/* <h3 className="text-2xl font-bold text-cyan-500 mb-6">Oracle</h3>
          <Slider {...sliderSettings} className="mb-12">
            {groups.oracle.map((c) => (
              <div key={c.title} className="px-4">
                <CertificationCard {...c} />
              </div>
            ))}
          </Slider> */}

          {/* NxtWave */}
          {/* <h3 className="text-2xl font-bold text-cyan-500 mb-6">NxtWave</h3>
          <Slider {...sliderSettings} className="mb-12">
            {groups.nxtwave.map((c) => (
              <div key={c.title} className="px-4">
                <CertificationCard {...c} />
              </div>
            ))}
          </Slider> */}

          {/* Dicoding */}
          <h3 className="text-2xl font-bold text-cyan-500 mb-6">Dicoding Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {groups.dicoding.map((cert) => (
              <CertificationCard key={cert.title} {...cert} />
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
