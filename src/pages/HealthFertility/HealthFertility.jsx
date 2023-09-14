import React from "react";
import Nav from "../../components/Nav";
import Info from "../../components/Info";
import Footer from "../../components/Footer";
import ContactInfo from "../../components/ContactInfo";
import "./HealthFertility.css";

function HealthFertility() {
  return (
    <div className="HealthFertility">
      <ContactInfo />
      <Info />
      <Nav />
      <main>
        <img
          loading="lazy"
          src="/images/HealthFertility/holding-hands 1.webp"
          alt=""
          className="main-images"
        />
      </main>
      <h2 className="text-center md:p-4 p-2 ">
        Your Health <span>Fertility Matters</span>
      </h2>
      <div className="benefits md:p-8 p-3">
        <div className="main-title md:p-8 p-2">
          Your Fertility Health Matters
        </div>
        <p className="p-4 text-gray-600">
          Infertility affects millions of people of reproductive age worldwide –
          and has an impact on their families and communities. Estimates suggest
          that between 48 million couples and 186 million individuals live with
          infertility globally. <br /> ( WHO )Why addressing infertility is
          important? Every human being has a right to the enjoyment of the
          highest attainable standard of physical and mental health. <br />{" "}
          Individuals and couples have the right to decide the number, timing
          and spacing of their children. <br /> Infertility can negate the
          realisation of these essential human rights. Addressing infertility is
          therefore an important part of realizing the right of individuals and
          couples to found a family.7 A wide variety of people, including
          heterosexual couples, same-sex partners, older persons, individuals
          who are not in sexual relationships and those with certain medical
          conditions, such as some HIV sero-discordant couples and cancer
          survivors, may require infertility management and fertility care
          services. Inequities and disparities in access to fertility care
          services adversely affect the poor, unmarried, uneducated, unemployed
          and other marginalised populations. Addressing infertility can also
          mitigate gender inequality. <br /> Although both women and men can
          experience infertility, women in a relationship with a man are often
          perceived to suffer from infertility, regardless of whether they are
          infertile or not. Infertility has significant negative social impacts
          on the lives of infertile couples and particularly women, who
          frequently experience violence, divorce, social stigma, emotional
          stress, depression, anxiety and low self-esteem.
          <br /> In some settings, fear of infertility can deter women and men
          from using contraception if they feel socially pressured to prove
          their fertility at an early age because of a high social value of
          childbearing. <br /> In such situations, education and
          awareness-raising interventions to address understanding of the
          prevalence and determinants of fertility and infertility is
          essential.Addressing challenges Availability, access, and quality of
          interventions to address infertility remain a challenge in most
          countries.
          <br /> Diagnosis and treatment of infertility is often not prioritized
          in national population and development policies and reproductive
          health strategies and are rarely covered through public health
          financing. Moreover, a lack of trained personnel and the necessary
          equipment and infrastructure, and the currently high costs of
          treatment medicines, are major barriers even for countries that are
          actively addressing the needs of people with infertility. While
          assisted reproduction technologies (ART) have been available for more
          than three decades, with more than 5 million children born worldwide
          from ART interventions such as in vitro fertilization (IVF), these
          technologies are still largely unavailable, inaccessible and
          unaffordable in many parts of the world, particularly in low and
          middle-income countries (LMIC).
          <br /> Government policies could mitigate the many inequities in
          access to safe and effective fertility care. To effectively address
          infertility, health policies need to recognize that infertility is a
          disease that can often be prevented, thereby mitigating the need for
          costly and poorly accessible treatments.
          <br />
          Incorporating fertility awareness in national comprehensive sexuality
          education programmes, promoting healthy lifestyles to reduce
          behavioural risks, including prevention, diagnosis and early treatment
          of STIs, preventing complications of unsafe abortion, postpartum
          sepsis and abdominal/pelvic surgery, and addressing environmental
          toxins associated with infertility, are policy and programmatic
          interventions that all governments can implement.
          <br /> In addition, enabling laws and policies that regulate third
          party reproduction and ART are essential to ensure universal access
          without discrimination and to protect and promote the human rights of
          all parties involved. Once fertility policies are in place, it is
          essential to ensure that their implementation is monitored, and the
          quality of services is continually improved.WHO response WHO
          recognizes that the provision of high-quality services for
          family-planning, including fertility care services, is one of the core
          elements of reproductive health. Recognizing the importance and impact
          of infertility on people’s quality of life and well-being, WHO is
          committed to addressing infertility and fertility care by:
          Collaborating with partners to conduct global epidemiological and
          etiological research into infertility. <br />
          Engaging and facilitating policy dialogue with countries worldwide to
          frame infertility within an enabling legal and policy environment.{" "}
          <br />
          Supporting the generation of data on the burden of infertility to
          inform resource allocation and provision of services.Developing
          guidelines on the prevention, diagnosis and treatment of male and
          female infertility, as part of the global norms and standards of
          quality care related to fertility care.Continually revising and
          updating other normative products, including the WHO laboratory manual
          for the examination and processing of human semen.Collaborating with
          relevant stakeholders including academic centres, ministries of
          health, other UN organizations, non-state actors (NSAs) and other
          partners to strengthen political commitment, availability and health
          system capacity to deliver fertility care globally.Providing
          country-level technical support to member states to develop or
          strengthen implementation of national fertility policies and services.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default HealthFertility;
