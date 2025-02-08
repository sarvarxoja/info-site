import "./company.css";
import React from "react";
import { motion } from "framer-motion";

export const Company = () => {
  return (
    <div className="container repository">
      <div className="first-item text-light">
      <motion.div
          initial={{ opacity: 0, y: -50 }} // Boshlang'ich holat (chap tomondan keladi)
          whileInView={{ opacity: 1, y: 0 }} // Ko'ringanda harakatlanish
          transition={{ duration: 1 }} // Animatsiya davomiyligi
          viewport={{ once: true }} // Faqat bir marta ishga tushadi
        >
        <span className="h1">Kompaniya haqida</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }} // Boshlang'ich holat (chap tomondan keladi)
          whileInView={{ opacity: 1, x: 0 }} // Ko'ringanda harakatlanish
          transition={{ duration: 1 }} // Animatsiya davomiyligi
          viewport={{ once: true }} // Faqat bir marta ishga tushadi
        >
          <p className="x-name">
            Agentlik-bu mijozlarga o'z bizneslari uchun sifatli va innovatsion
            echimlarni taqdim etish maqsadida tashkil etilgan veb-agentlik.
            Bizning jamoamiz mijozlarga moslashtirilgan va sifatli mahsulotni
            taklif qilish uchun yaqin hamkorlikda ishlaydigan tajribali
            veb-dizayn, ishlab chiqish va marketing mutaxassislaridan iborat.
          </p>
        <p className="x-name">
          Biz veb-dizayn, veb-sayt va mobil ilovalarni ishlab chiqish, SEO
          optimallashtirish, kontent yaratish va reklama kampaniyalarini o'z
          ichiga olgan keng ko'lamli xizmatlarni taklif etamiz. Biz eng yangi
          texnologiyalar va innovatsion usullardan foydalangan holda brendni
          rivojlantirish va sotishni ko'paytirish bilan shug'ullanamiz.
        </p>
        </motion.div>
      </div>
      <motion.div
          initial={{ opacity: 0, y: -50 }} // Boshlang'ich holat (chap tomondan keladi)
          whileInView={{ opacity: 1, y: 0 }} // Ko'ringanda harakatlanish
          transition={{ duration: 1 }} // Animatsiya davomiyligi
          viewport={{ once: true }} // Faqat bir marta ishga tushadi
        >
      <div className="secondly-item">
        <div className="inf-camp">
          <span className="d-block  number-inf select-none">20+</span>
          <span>Проектов запустил</span>
        </div>
        <div className="inf-camp">
          <span className="d-block  number-inf select-none">4 года</span>
          <span>Опыта разработки</span>
        </div>
        <div className="inf-camp">
          <span className="d-block  number-inf select-none">12+</span>
          <span>Профессионалов</span>
        </div>
        <div className="inf-camp">
          <span className="d-block  number-inf select-none">4 года</span>
          <span>Опыта разработки</span>
        </div>
      </div>
      </motion.div>
    </div>
  );
};
