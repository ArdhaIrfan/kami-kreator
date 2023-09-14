import style from './App.module.css'
import logo from './assets/img/logo.png'
import heroImage from './assets/img/hero-image.png'
import aboutImage from './assets/img/about-image.png'
import promotionIllustration from './assets/img/promotion-illustration.png'
import mentoringIllustration from './assets/img/mentoring-illustration.png'
import volunteeringIllustration from './assets/img/volunteering-illustration.png'
import internshipIllustration from './assets/img/internship-illustration.png'
import communityIllustration from './assets/img/community-illustration.png'
import promotion from './assets/img/promotion.png'
import mentoring from './assets/img/mentoring.png'
import volunteering from './assets/img/volunteering.png'
import internship from './assets/img/internship.png'
import community from './assets/img/community.png'
import pattern from './assets/img/pattern.png'
import person1 from './assets/img/person1.png'
import person2 from './assets/img/person2.png'
import { FaInstagram, FaTiktok, FaYoutube, FaLinkedin } from 'react-icons/fa6';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


function App() {

  return (
    <>
      <nav className={style.navbar}>
        <a href="#"><img src={logo} alt="Logo" /></a>
        <ul className={style.ul}>
          <a href="#about"><li>Tentang Kami</li></a>
          <a href="#program"><li>Program</li></a>
          <a href="#achievement"><li>Pencapaian</li></a>
        </ul>
      </nav>
      <section id="hero" className={`${style.section} ${style.hero}`}>
        <div className={style.content}>
          <h1>Selamat datang di Kami Kreator!</h1>
          <img src={heroImage} className={style.small} alt="Hero Image" />
          <p className={style.regularLarge}>Kami Kreator adalah tempat keren buat yang mau jadi bintang di dunia kreatif. Kita siap ngebantu kamu meraih impian. Ayo, kembangkan karier dan karya kreatifmu bersama Kami Kreator!</p>
          <div className={style.buttonWrapper}><a href="#program" className={style.buttonPrimary}>Lihat Program</a></div>
        </div>
        <img src={heroImage} className={style.big} alt="Hero Image" />
      </section>
      <section id="about" className={`${style.section} ${style.about}`}>
        <img src={aboutImage} className={style.big} alt="About Kami Kreator" />
        <div className={style.content}>
          <div className={style.titleWrapper}>
            <h6 className={style.sectionTitle}>Tentang Kami Kreator</h6>
            <h2>Kami percaya, semua orang bisa jadi kreator.</h2>
          </div>
          <img src={aboutImage} className={style.small} alt="About Kami Kreator" />
          <p>Kami adalah tim yang selalu semangat di dunia konten kreatif. Sudah banyak yang kami bantu sampai sukses di industri ini, dan sekarang giliran kamu! Dengan pengalaman dan semangat yang kami punya, kamu bakal jadi bintang berikutnya. Yuk, kita raih impian bareng!</p>
          <div className={style.buttonWrapper}><a href="#program" className={style.buttonPrimary}>Selengkapnya</a></div>
        </div>
      </section>
      <section id="program" className={`${style.section} ${style.program}`}>
        <div className={style.titleWrapper}>
          <h6 className={style.sectionTitle}>Program Kami Kreator</h6>
          <h2>Kita punya banyak opsi buat kamu</h2>
        </div>
        <div className={style.cards}>
          <div className={style.card}>
            <img src={promotionIllustration} alt="Promotion Illustration" />
            <h5>Promotion</h5>
          </div>
          <div className={style.card}>
            <img src={mentoringIllustration} alt="Mentoring Illustration" />
            <h5>Mentoring</h5>
          </div>
          <div className={style.card}>
            <img src={volunteeringIllustration} alt="Volunteering Illustration" />
            <h5>Volunteering</h5>
          </div>
          <div className={style.card}>
            <img src={internshipIllustration} alt="Internship Illustration" />
            <h5>Internship</h5>
          </div>
          <div className={style.card}>
            <img src={communityIllustration} alt="Community Illustration" />
            <h5>Community</h5>
          </div>
        </div>
        <div className={style.programDetails}>
          <div id="promotion" className={style.promotion}>
            <div className={style.content}>
              <h2>Promotion Program</h2>
              <p className={style.medium}>Program ini cocok untuk mereka yang ingin menjadi terkenal di dunia kreatif. Kami Kreator akan membantu kamu mempromosikan karya-karyamu agar dikenal luas oleh audiens yang tepat, sehingga kamu bisa fokus pada berkarya dan mencapai potensimu yang maksimal.</p>
            </div>
            <img src={promotion} alt="Promotion Program" />
          </div>
          <div id="mentoring" className={style.mentoring}>
            <div className={style.content}>
              <h2>Mentoring Program</h2>
              <p className={style.medium}>Bagi yang butuh bimbingan dan nasihat, program Mentoring adalah jawabannya. Kamu akan mendapatkan mentor yang berpengalaman di bidangmu untuk membantu mengasah kemampuan dan kariermu, sehingga kamu siap untuk tantangan di dunia kreatif dan mengembangkan jaringan yang berharga.</p>
            </div>
            <img src={mentoring} alt="Mentoring Program" />
          </div>
          <div id="volunteering" className={style.volunteering}>
            <div className={style.content}>
              <h2>Volunteering Program</h2>
              <p className={style.medium}>Bagi mereka yang ingin memberikan kontribusi positif melalui kreativitasnya, program Volunteer adalah tempatnya. Bergabunglah sebagai relawan dan berikan dampak positif pada masyarakat, sehingga kamu bisa merasakan kebahagiaan memberikan yang terbaik, sambil memperluas cakrawala dan pengalamanmu.</p>
            </div>
            <img src={volunteering} alt="Volunteering Program" />
          </div>
          <div id="internship" className={style.internship}>
            <div className={style.content}>
              <h2>Internship Program</h2>
              <p className={style.medium}>Jika kamu ingin mendapatkan pengalaman kerja di dunia kreatif, program Internship dapat membantu. Kami akan menghubungkan kamu dengan kesempatan magang yang sesuai dengan minatmu, sehingga kamu bisa memulai karier dengan langkah yang tepat dan membangun portfolio yang mengesankan.</p>
            </div>
            <img src={internship} alt="Internship Program" />
          </div>
          <div id="community" className={style.community}>
            <div className={style.content}>
              <h2>Kami Community</h2>
              <p className={style.medium}>Untuk yang suka berkolaborasi dan berbagi dengan komunitas kreatif, program Community adalah pilihan yang tepat. Bergabunglah dengan komunitas kami dan temui teman-teman seprofesi, sehingga kamu bisa terus terinspirasi dan berkembang, serta mendapatkan dukungan dalam perjalanan kreatifmu.</p>
            </div>
            <img src={community} alt="Kami Community" />
          </div>
        </div>
      </section>
      <section id="achievement" className={`${style.section} ${style.achievement}`}>
        <div className={style.titleWrapper}>
          <h6 className={style.sectionTitle}>Pencapaian Kami</h6>
          <h2>Perjalanan yang berarti bagi kami</h2>
        </div>
        <div className={style.stat}>
          <div>
            <h1>4452</h1>
            <h6>Instagram Followers</h6>
          </div>
          <div>
            <h1>1187</h1>
            <h6>Tiktok Followers</h6>
          </div>
          <div>
            <h1>30</h1>
            <h6>Alumni Volunteers</h6>
          </div>
        </div>
        <div className={style.review}>
          <div className={style.content}>
            <div>
              <h3>Apa Kata Mereka?</h3>
              <p>Jangan cuma mendengar dari kami saja, yuk, baca apa yang dikatakan oleh teman-teman yang sudah merasakan manfaat dari program Kami Kreator. Mereka telah mengalami perubahan positif dalam karier dan kreativitas mereka! Dengan bangga, mereka berbagi pengalaman mereka dengan Kami Kreator.</p>
            </div>
            <img src={pattern} alt="Pattern" />
          </div>
          <div className={style.comments}>
            <div className={style.comment1}>
              <img src={person1} alt="Person 1" />
              <p>&quot;Program Volunteer di Kami Kreator memberi saya kesempatan untuk menggunakan keahlian saya dalam bidang videografi untuk tujuan yang baik. Bergabung dengan komunitas ini membuat saya merasa terhubung dengan orang-orang berbakat lainnya. Kami Kreator adalah tempat yang luar biasa untuk berkreasi dan memberikan dampak positif.&quot;</p>
              <p><b>Sarah Listya</b></p>
            </div>
            <div className={style.comment2}>
              <img src={person2} alt="Person 2" />
              <p>&quot;Saya selalu bermimpi untuk menjadi content creator yang sukses, tetapi tidak tahu harus mulai dari mana. Setelah bergabung dengan Kami Kreator, saya mendapatkan mentor yang luar biasa. Mereka membimbing saya dengan penuh kesabaran dan memberikan wawasan berharga. Sekarang, saya merasa lebih percaya diri dan memiliki portofolio yang mengesankan.&quot;</p>
              <p><b>Dalian Vorensky</b></p>
            </div>
          </div>
        </div>
      </section>
      <section id="findus" className={`${style.section} ${style.findUs}`}>
        <h2>Temukan Kami</h2>
        <div className={style.content}>
          <div className={style.social}>
            <div className={style.instagram}>
              <a href="https://instagram.com/kamikreator"target="_blank" rel="noreferrer">
              <FaInstagram />
              <h5>kamikreator</h5>
              </a>
            </div>
            <div className={style.tiktok}>
              <a href="https://www.tiktok.com/@kamikreator"target="_blank" rel="noreferrer">
              <FaTiktok />
              <h5>kamikreator</h5>
              </a>
            </div>
            <div className={style.youtube}>
              <a href="https://www.youtube.com/channel/UC57BuSfQY417-wq9bgBPitA"target="_blank" rel="noreferrer">
              <FaYoutube />
              <h5>Kami Kreator</h5>
              </a>
            </div>
          </div>
          <div className={style.formal}>
            <div className={style.gmail}>
              <a href="">
              <MailOutlineIcon />
              <h5>kamikreatornih@gmail.com</h5>
              </a>
            </div>
            <div className={style.linkedin}>
              <a href="https://www.linkedin.com/company/kami-kreator/"target="_blank" rel="noreferrer">
              <FaLinkedin />
              <h5>Kami Kreator</h5>
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className={style.footer}>
        <div className={style.content}>
          <div className={style.company}>
            <img src={logo} alt="Logo" />
            <p>Kembangkan karier dan karya kreatifmu di tempat di mana ide-ide menjadi kenyataan.</p>
            <div className={style.social}>
              <a href="https://instagram.com/kamikreator" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href="https://www.tiktok.com/@kamikreator" target="_blank" rel="noreferrer"><FaTiktok /></a>
              <a href="https://www.youtube.com/channel/UC57BuSfQY417-wq9bgBPitA" target="_blank" rel="noreferrer"><FaYoutube /></a>
              <a href="https://www.linkedin.com/company/kami-kreator/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            </div>
          </div>
          <div className={style.navigations}>
            <div className={style.explore}>
              <ul>
                <li className={style.title}>Eksplor</li>
                <li><a href="#about">Tentang Kami</a></li>
                <li><a href="#achievement">Pencapaian</a></li>
              </ul>
            </div>
            <div className={style.programs}>
            <ul>
                <li className={style.title}>Program</li>
                <li><a href="#promotion">Promotion Program</a></li>
                <li><a href="#mentoring">Mentoring Program</a></li>
                <li><a href="#volunteering">Volunteering Program</a></li>
                <li><a href="#internship">Internship Program</a></li>
                <li><a href="#community">Kami Community</a></li>
              </ul>
            </div>
          </div>
        </div>
        <p className={`${style.regularSmall} ${style.copyright}`}>Made for Kami Kreator. Website content and design © 2023 by Ardha Irfan.</p>
      </footer>
    </>
  )
}

export default App
