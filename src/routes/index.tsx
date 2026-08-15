import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  MapPin,
  ChevronDown,
  ArrowRight,
  Sparkles,
  MessageCircle,
  Send,
  Stethoscope,
  Smile,
  ShieldCheck,
  Languages,
  Wallet,
  Clock,
  Scissors,
  Syringe,
  HandHeart,
  CalendarCheck,
  Video,
  Paperclip,
  Building2,
  Heart,
} from "lucide-react";
import heroDental from "@/assets/hero-dental.jpg";
import heiheCity from "@/assets/heihe-city.jpg";
import dentalCare from "@/assets/dental-care.jpg";
const hotelRoom = "/imeges/hotel-entrance.png";
import sashaImg from "@/assets/sasha.jpg";
import heiheStreet from "@/assets/heihe-street.jpg";
import clinicVideo from "@/assets/2247301271311179724.mov";
import corridorVideo from "@/assets/clinic-corridor-web.mp4";
export const Route = createFileRoute("/")({
  component: Landing,
});

const heroBenefits = [
  "Всё организовано заранее",
  "Русскоговорящее сопровождение",
  "Многие процедуры — за одну поездку",
  "Проживание с ежедневными завтраками",
];

const whyHeihe = [
  { icon: Smile, t: "Современное лечение и протезирование", d: "Стоматология с использованием современных материалов и оборудования." },
  { icon: Wallet, t: "Прозрачная стоимость", d: "Стоимость лечения определяется после консультации и составления плана лечения." },
  { icon: Languages, t: "Русскоговорящие специалисты", d: "Общение и перевод на всех этапах — от консультации до выписки." },
  { icon: HandHeart, t: "Встреча и помощь в поездке", d: "Сопровождаем от прибытия до возвращения домой." },
  { icon: Sparkles, t: "Лечение и отдых", d: "Спокойный город рядом с границей — можно совместить лечение с прогулками." },
  { icon: Clock, t: "Компактные сроки", d: "Многие процедуры можно пройти за одну поездку — точный срок зависит от плана лечения." },
];


const services = [
  { icon: Smile, t: "Лечение зубов" },
  { icon: Stethoscope, t: "Диагностика" },
  { icon: Scissors, t: "Удаление зубов" },
  { icon: Smile, t: "Протезирование" },
  { icon: Smile, t: "Коронки" },
  { icon: Syringe, t: "Имплантация" },
];

const extraServices = [
  { icon: Sparkles, t: "Блефаропластика" },
  { icon: Sparkles, t: "Пластика лица" },
  { icon: HandHeart, t: "Китайский лечебный массаж" },
  { icon: Syringe, t: "Иглоукалывание" },
  { icon: Heart, t: "Оздоровительные капельницы" },
  { icon: Sparkles, t: "Сауна и восстановительные процедуры" },
];

const steps = [
  { n: "01", t: "Вы оставляете заявку", d: "Расскажите, какое лечение вас интересует, и приложите снимки или документы, если они есть." },
  { n: "02", t: "Предварительная консультация", d: "Специалисты изучают информацию и сообщают возможный план лечения, ориентировочную стоимость и срок пребывания." },
  { n: "03", t: "Подготовка поездки", d: "Согласовываем даты, маршрут, встречу, проживание и остальные организационные вопросы." },
  { n: "04", t: "Встреча в Китае", d: "Встречаем и помогаем добраться до гостиницы или медицинского центра." },
  { n: "05", t: "Диагностика и лечение", d: "После очного обследования утверждается окончательный план и начинается лечение." },
  { n: "06", t: "Возвращение домой", d: "Вы получаете документы, рекомендации по уходу и гарантийную информацию." },
];


const videos = [
  "Дорога в Китай",
  "Прибытие в Хэйхэ",
  "Медицинский центр",
  "Проживание",
  "Город и питание",
  "Возвращение домой",
];

const faqs = [
  { q: "Сколько дней занимает поездка?", a: "Многие процедуры можно пройти за одну поездку продолжительностью около пяти дней. Точный срок зависит от плана лечения и определяется после диагностики." },
  { q: "Можно ли заранее узнать стоимость?", a: "Да, вы можете отправить снимки и описание ситуации — мы передадим информацию специалистам и поможем получить предварительный расчёт. Окончательная стоимость определяется после очного осмотра." },
  { q: "Нужно ли знать китайский язык?", a: "Нет. Сопровождающий помогает с переводом и организационными вопросами на всех этапах." },
  { q: "Кто встретит меня в Китае?", a: "Вас встречает наш русскоговорящий сопровождающий и помогает добраться до гостиницы или медицинского центра." },
  { q: "Где я буду жить?", a: "Мы помогаем с подбором и бронированием гостиницы. Как правило, это комфортный номер с завтраком недалеко от медицинского центра." },
  { q: "Есть ли гарантия на выполненные работы?", a: "После завершения лечения выдаётся официальная гарантийная карта медицинского центра «Доверие». Гарантийные обязательства оформляются в соответствии с видом выполненного лечения." },
  { q: "Какие документы необходимо взять?", a: "Заграничный паспорт и имеющиеся медицинские документы или снимки. Точный список подскажем при подготовке поездки." },
  { q: "Можно ли приехать с сопровождающим?", a: "Да, вы можете приехать с близким человеком. Мы поможем с организацией поездки для обоих." },
  { q: "Как происходит оплата?", a: "Оплата за лечение производится непосредственно в медицинском центре. Организационные услуги оплачиваются отдельно — условия согласовываем заранее." },
  { q: "Что делать после возвращения домой?", a: "Вы получаете документы и рекомендации по уходу. Мы остаёмся на связи и помогаем с вопросами по гарантии." },
];

function Landing() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [consent, setConsent] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
          <a href="#top" className="flex min-w-0 items-center gap-2.5">
            <div className="w-9 h-9 shrink-0 rounded-xl gradient-accent grid place-items-center shadow-soft">
              <Smile className="w-5 h-5 text-primary-foreground" strokeWidth={2.5} />
            </div>
            <div className="leading-tight min-w-0">
              <div className="font-display text-base sm:text-lg font-semibold truncate">Мост Здоровья • Хэйхэ</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground truncate">
                Ваш медицинский мост в Китай
              </div>
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#why" className="hover:text-foreground transition">Почему Хэйхэ</a>
            <a href="#services" className="hover:text-foreground transition">Услуги</a>
            <a href="#process" className="hover:text-foreground transition">Поездка</a>
            <a href="#sasha" className="hover:text-foreground transition">Сопровождение</a>
            <a href="#faq" className="hover:text-foreground transition">Вопросы</a>
            <a href="#contact" className="hover:text-foreground transition">Контакты</a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full gradient-accent text-primary-foreground px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium shadow-soft hover:opacity-95 transition lg:ml-4"
          >
            Консультация <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-28 sm:pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 gradient-soft" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/15 blur-3xl -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-medium text-accent-foreground mb-5">
              <MapPin className="w-3.5 h-3.5" /> Хэйхэ, Китай · медицинский центр «Доверие»
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.05] mb-5">
              Мост Здоровья в Хэйхэ <br className="hidden sm:block" />
              • <span className="text-gradient"></span>
            </h1>
            <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
              Организуем поездку в медицинский центр «Доверие» в Хэйхэ (Китай).
            </p>
            <p className="text-sm text-muted-foreground mb-7 leading-relaxed">
              Помогаем с билетами, встречаем, размещаем в гостинице с ежедневными завтраками и сопровождаем на всех этапах лечения.ы
            </p>



            <div className="flex flex-wrap gap-3 mb-7">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full gradient-accent text-primary-foreground px-6 py-3.5 font-medium shadow-elegant hover:scale-[1.02] transition"
              >
                Получить консультацию <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 font-medium hover:bg-accent/40 transition"
              >
                Рассчитать стоимость
              </a>
            </div>
            <p className="text-sm text-muted-foreground mb-7">
              Бесплатная консультацитя-спокойно разберем вашу ситуацию и ответим на вопросы.
            </p>
            <ul className="grid sm:grid-cols-2 gap-2 text-sm">
              {heroBenefits.map((b) => (
                <li key={b} className="flex items-center gap-2 text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative animate-fade-in">
            <video
              src={clinicVideo}
              controls

              className="rounded-3xl shadow-elegant w-full aspect-{4/3} object-cover"
            >
              Ваш браузер не поддерживает видео.</video>
            <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-card rounded-2xl shadow-card p-4 flex items-center gap-3 border border-border/60">
              <div className="w-10 h-10 rounded-xl gradient-accent grid place-items-center shrink-0">
                <Clock className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="text-xs sm:text-sm">
                <div className="font-semibold">Около 5 дней</div>
                <div className="text-muted-foreground">на многие процедуры</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INCLUDED IN PROGRAM */}
      <section id="included" className="py-20 sm:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-12 animate-fade-in">
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">Программа</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
              Что входит в программу поездки
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {[
              "Бесплатная консультация и подготовка плана поездки",
              "Помощь с покупкой билетов",
              "Встреча на границе или в аэропорту",
              "Трансфер до гостиницы и клиники",
              "Сопровождение русскоговорящими специалистами",
              "Проживание в гостинице",
              "Ежедневные завтраки",
              "Помощь во время всего лечения",
              "Сопровождение до возвращения домой",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-background border border-border/60 hover:border-primary/40 hover:shadow-soft transition-all animate-fade-in"
              >
                <div className="w-10 h-10 shrink-0 rounded-xl bg-accent grid place-items-center">
                  <HandHeart className="w-5 h-5 text-primary" />
                </div>
                <p className="min-w-0 text-base leading-relaxed pt-1.5">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-primary/20 bg-background p-6 sm:p-8 shadow-soft max-w-4xl">
            <p className="text-base sm:text-lg leading-relaxed">
              Остальное питание оплачивается самостоятельно. Окончательная стоимость определяется после консультации, диагностики и составления индивидуального плана лечения.
            </p>
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section id="guarantee" className="py-20 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-card shadow-elegant p-8 sm:p-12 animate-fade-in">
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
              <div className="w-14 h-14 shrink-0 rounded-2xl gradient-accent grid place-items-center shadow-soft">
                <ShieldCheck className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">Гарантия</div>
                <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Официальная гарантия</h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  После завершения лечения каждому пациенту выдаётся официальная гарантийная карта медицинского центра «Доверие». Все гарантийные обязательства оформляются китайскими специалистами в соответствии с видом выполненного лечения.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY HEIHE */}
      <section id="why" className="py-20 sm:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12 animate-fade-in">
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">Почему Хэйхэ</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
              Почему пациенты выбирают лечение в Хэйхэ
            </h2>
            <p className="text-muted-foreground">
              Спокойный приграничный город, короткая дорога из России и организованное сопровождение — от первой заявки до возвращения домой.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyHeihe.map((s) => (
              <div
                key={s.t}
                className="p-7 rounded-2xl bg-background border border-border/60 hover:border-primary/40 hover:shadow-soft transition-all animate-fade-in"
              >
                <div className="w-12 h-12 rounded-xl bg-accent grid place-items-center mb-5">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-border bg-background p-6 sm:p-8 text-sm text-muted-foreground leading-relaxed max-w-4xl">
            Перед поездкой пациент отправляет снимки и имеющиеся медицинские документы. Специалисты предварительно оценивают ситуацию, составляют ориентировочный план лечения и сообщают примерную стоимость. Окончательный план и стоимость определяются после очной диагностики.
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12">
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">Услуги</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">Стоматология — основа поездки</h2>
            <p className="text-muted-foreground">
              Основной акцент — лечение и протезирование зубов в медицинском центре «Доверие». Дополнительно доступны восстановительные и косметологические процедуры.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {services.map((s) => (
              <div key={s.t} className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 hover:shadow-soft transition-all">
                <div className="w-12 h-12 rounded-xl gradient-accent grid place-items-center mb-4 shadow-soft">
                  <s.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold">{s.t}</h3>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 sm:p-10">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
              <Sparkles className="w-4 h-4" /> Дополнительно
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold mb-6">Другие медицинские и восстановительные услуги</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {extraServices.map((s) => (
                <div key={s.t} className="flex items-center gap-3 rounded-xl border border-border/60 bg-background p-4">
                  <div className="w-10 h-10 rounded-lg bg-accent grid place-items-center shrink-0">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="font-medium text-sm">{s.t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-20 sm:py-24 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
          style={{ backgroundImage: "radial-gradient(circle at 20% 30%, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="max-w-2xl mb-12 text-primary-foreground">
            <div className="text-xs uppercase tracking-[0.2em] font-semibold mb-3 opacity-80">Как проходит поездка</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">Шесть шагов от заявки до возвращения</h2>
            <p className="opacity-80">Понятный порядок: вы знаете, что произойдёт на каждом этапе.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map((s) => (
              <div key={s.n} className="p-7 rounded-2xl bg-card/10 backdrop-blur-sm border border-primary-foreground/15 text-primary-foreground hover:bg-card/15 transition">
                <div className="font-display text-4xl font-semibold opacity-40 mb-3">{s.n}</div>
                <h3 className="font-display text-xl font-semibold mb-2">{s.t}</h3>
                <p className="text-sm opacity-85 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="py-20 sm:py-24 bg-card">f
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/images/hotel-entrance.png?v-2" alt="Комфортное проживание" width={1400} height={1000} loading="lazy"
              className="rounded-3xl shadow-elegant w-full aspect-[4/3] object-cover" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">Проживание</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">Где вы будете жить</h2>
            <p className="text-muted-foreground mb-6">
              Гостиница расположена недалеко от медицинского центра, чтобы дорога на приёмы занимала минимум времени. Номер бронируем заранее, в день приезда помогаем с заселением.
            </p>
            <p className="text-xs text-muted-foreground">
              Даты поездки, продолжительность проживания и план лечения согласовываются индивидуально до приезда.
            </p>s
          </div>
        </div>
      </section>


      <section id="sasha" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Ваши координаторы
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Женя помогает вам в России, Саша встречает и сопровождает вас в Китае.
                Вы всегда понимаете, к кому обратиться на каждом этапе поездки и лечения.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 items-stretch">
              <div className="rounded-3xl overflow-hidden shadow-lg bg-slate-50">
                <img
                  src="/images/zhenya.png"
                  alt="Женя — координатор в России"
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Женя
                  </h3>
                  <p className="text-primary font-semibold mb-3">
                    Координатор в России
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Поможет с первичной консультацией, подготовкой к поездке,
                    организационными вопросами и будет на связи до вашего возвращения.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden shadow-lg bg-slate-50">
                <img
                  src="/images/zhenya-sasha.jpeg"
                  alt="Женя и Саша — ваши координаторы"
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Мы работаем вместе
                  </h3>
                  <p className="text-primary font-semibold mb-3">
                    Россия + Китай
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Передаём информацию друг другу и сопровождаем вас на всём пути —
                    от первого обращения до завершения поездки.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden shadow-lg bg-slate-50">
                <img
                  src="/images/sasha.png"
                  alt="Саша — сопровождающая в Китае"
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
Саша                  </h3>
                  <p className="text-primary font-semibold mb-3">
                    Сопровождение в Китае
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Встречает в Хэйхэ, помогает с переводом, сопровождает в клинике
                    и решает бытовые и организационные вопросы на месте.
                  </p>
                </div>
              </div>


            </div>

          </div>

        </div>
      </section>

          {/* HEIHE CITY */}
          <section className="py-20 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="max-w-2xl mb-10">
                <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">Хэйхэ</div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">Лечение в спокойном приграничном городе</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Хэйхэ — спокойный и чистый город на границе с Россией. Здесь нет суеты большого мегаполиса, а дорога из Благовещенска занимает немного времени. Во время поездки можно не только пройти лечение, но и познакомиться с городом, китайской кухней и местной культурой.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
            

              <img src="/images/gallery-2.jpg" alt="Номер гостиницы" className="w-full h-64 object-cover rounded-xl" />
              <img src="/images/gallery-3.jpg" alt="Холл гостиницы" className="w-full h-64 object-cover rounded-xl" />
              <img src="/images/hotel-entrance.png" alt="Вход в гостинницу Lujiangss" className="w-full h-64 object-cover rounded-xl" />
              <img src="/images/gallery-5.jpg" alt="Стоматологический кабинет" className="w-full h-64 object-cover rounded-xl" />
              <img src="/images/gallery-6.jpg" alt="Клиника в Хэйхэ" className="w-full h-64 object-cover rounded-xl" />
              <img src="/images/gallery-4.jpg" alt="Стоматология Доверие" className="w-full h-64 object-cover rounded-x1"/>
            </div>



          </section>


          {/* VIDEO */}
          <section className="py-20 sm:py-24 bg-card">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="max-w-2xl mb-10">
                <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">Видео</div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">Посмотрите, как проходит поездка</h2>
                <p className="text-muted-foreground">Короткие видео из реальной поездки — добавим после согласования материалов.</p>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory">
                {videos.map((v) => (
                  <div key={v} className="snap-start shrink-0 w-[220px] sm:w-[260px] aspect-[9/16] rounded-2xl bg-background border border-border/60 grid place-items-center text-center p-4 shadow-card">
                    <div>
                      <div className="w-12 h-12 rounded-full gradient-accent grid place-items-center mx-auto mb-3 shadow-soft">
                        <Video className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div className="font-medium text-sm">{v}</div>
                      <div className="text-xs text-muted-foreground mt-1">Видео будет добавлено</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CONTACT / PRICE */}
          <section id="contact" className="py-20 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
           

              <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/30 blur-3xl" ></div>
              <div className="relative">
                <div className="text-xs uppercase tracking-[0.2em] font-semibold mb-3 opacity-80">Стоимость</div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-5">Узнайте предварительную стоимость лечения</h2>
                <p className="opacity-90 mb-6 leading-relaxed">
                  Стоимость зависит от состояния зубов, выбранных материалов и объёма лечения. Отправьте имеющиеся снимки и кратко опишите ситуацию — мы передадим информацию специалистам и поможем получить предварительный расчёт.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 grid place-items-center shrink-0"><Building2 className="w-4 h-4" /></div>
                    <div>
                      <div className="text-xs opacity-70">Медицинский центр</div>
                      <div className="font-medium">«Доверие», Хэйхэ</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 grid place-items-center shrink-0"><Phone className="w-4 h-4" /></div>
                    <div>
                      <div className="text-xs opacity-70">Ответ на заявку</div>
                      <div className="font-medium">Свяжемся в течение дня</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 grid place-items-center shrink-0"><MessageCircle className="w-4 h-4" /></div>
                    <div>
                      <div className="text-xs opacity-70">Связь</div>
                      <div className="font-medium">WhatsApp · Telegram</div>
                    </div>
                  </div>
                </div>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!consent) return;
                  alert("Спасибо! Мы свяжемся с вами.");
                }}
                className="relative bg-card text-foreground rounded-2xl p-6 sm:p-8 shadow-elegant"
              >
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Имя" placeholder="Как к вам обращаться" required />
                    <Field label="Телефон" placeholder="+7 (___) ___-__-__" required type="tel" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Город" placeholder="Например, Благовещенск" />
                    <div>
                      <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Услуга</label>
                      <select className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary transition">
                        <option>Лечение зубов</option>
                        <option>Протезирование</option>
                        <option>Имплантация</option>
                        <option>Диагностика</option>
                        <option>Другое</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Сообщение</label>
                    <textarea rows={3} className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary transition resize-none"
                      placeholder="Кратко опишите ситуацию" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Снимки или документы</label>
                    <label className="mt-1 flex items-center gap-2 rounded-lg border border-dashed border-border bg-background px-4 py-3 text-sm cursor-pointer hover:bg-accent/30 transition">
                      <Paperclip className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Прикрепить файл (необязательно)</span>
                      <input type="file" className="hidden" />
                    </label>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Как удобнее связаться</label>
                    <div className="mt-2 grid grid-cols-3 gap-2 text-sm">
                      {[
                        { label: "Телефон", icon: Phone },
                        { label: "WhatsApp", icon: MessageCircle },
                        { label: "Telegram", icon: Send },
                      ].map((o) => (
                        <label key={o.label} className="flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-3 py-2.5 cursor-pointer hover:border-primary transition has-[:checked]:border-primary has-[:checked]:bg-accent/40">
                          <input type="radio" name="contact-method" className="sr-only" defaultChecked={o.label === "WhatsApp"} />
                          <o.icon className="w-4 h-4 text-primary" />
                          <span>{o.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <label className="flex items-start gap-3 text-[12px] leading-relaxed text-muted-foreground cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-0.5 h-4 w-4 shrink-0 rounded border-border accent-primary"
                    />
                    <span>
                      Я ознакомился(ась) с{" "}
                      <Link to="/privacy" className="underline hover:text-foreground transition">Политикой конфиденциальности</Link>{" "}
                      и даю{" "}
                      <Link to="/consent" className="underline hover:text-foreground transition">согласие на обработку персональных данных</Link>.
                    </span>
                  </label>
                  <button
                    type="submit"
                    disabled={!consent}
                    className="w-full rounded-lg gradient-accent text-primary-foreground py-3.5 font-medium shadow-soft hover:opacity-95 transition disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:opacity-50"
                  >
                    Получить предварительный расчёт
                  </button>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    Предварительный расчёт не является окончательным медицинским заключением.
                  </p>
                </div>
              </form>
            </div>

      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 sm:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">FAQ</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">Частые вопросы</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="rounded-2xl bg-background border border-border/60 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-accent/30 transition"
                >
                  <span className="font-medium text-sm sm:text-base">{f.q}</span>
                  <ChevronDown className={`w-5 h-5 text-primary shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 sm:px-6 pb-6 text-sm text-muted-foreground leading-relaxed animate-fade-in">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-5">
            Сделайте первый шаг — узнайте возможный план лечения
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Оставьте заявку, расскажите о своей ситуации и получите предварительную консультацию по лечению и организации поездки в Хэйхэ.
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            Получите бесплатную консультацию без каких-либо обязательств.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full gradient-accent text-primary-foreground px-7 py-3.5 font-medium shadow-elegant hover:scale-[1.02] transition">
              Оставить заявку <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 font-medium hover:bg-accent/40 transition">
              Связаться с нами
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-secondary text-secondary-foreground py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-xl gradient-accent grid place-items-center">
                  <Smile className="w-5 h-5 text-primary-foreground" strokeWidth={2.5} />
                </div>
                <div className="font-display text-lg font-semibold">Мост Здоровья • Хэйхэ</div>
              </div>
              <p className="text-sm opacity-75 leading-relaxed">
                Ваш медицинский мост в Китай. Медицинский центр «Доверие», Хэйхэ: организация поездок на лечение и протезирование зубов с полным сопровождением.
              </p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider opacity-60 mb-4">Связь</div>
              <ul className="space-y-2 text-sm opacity-90">
                <li className="flex items-center gap-2"><MessageCircle className="w-4 h-4" /> WhatsApp · Telegram</li>
                <li className="flex items-start gap-2"><Send className="w-4 h-4 mt-0.5" /> <span>Оставьте заявку в форме — ответим и подскажем по поездке.</span></li>
              </ul>
              <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-sm underline hover:opacity-100">
                Перейти к форме <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div>
              <div className="text-xs uppercase tracking-wider opacity-60 mb-4">Разделы</div>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="#why" className="hover:opacity-100">Почему Хэйхэ</a></li>
                <li><a href="#services" className="hover:opacity-100">Услуги</a></li>
                <li><a href="#process" className="hover:opacity-100">Как проходит поездка</a></li>
                <li><a href="#faq" className="hover:opacity-100">Вопросы</a></li>
                <li><Link to="/privacy" className="hover:opacity-100">Политика конфиденциальности</Link></li>
                <li><Link to="/consent" className="hover:opacity-100">Согласие на обработку персональных данных</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-6 border-t border-primary-foreground/10 text-xs opacity-70 leading-relaxed space-y-3">
            <p>
              Информация на сайте носит ознакомительный характер и не заменяет консультацию врача. План лечения, сроки, противопоказания и окончательная стоимость определяются специалистами после диагностики.
            </p>
            <div className="flex flex-col md:flex-row justify-between gap-2 pt-3">
              <div>© 2026 Мост Здоровья • Хэйхэ (Health Bridge Heihe)</div>
              <div>Отправляя заявку, вы даёте согласие на обработку персональных данных.</div>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING CONTACT */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
        <a
          href="#contact"
          aria-label="Написать в WhatsApp"
          className="w-14 h-14 rounded-full gradient-accent grid place-items-center shadow-elegant hover:scale-105 transition"
        >
          <MessageCircle className="w-6 h-6 text-primary-foreground" />
        </a>
      </div>
    </div>
  );
}

function Field({ label, placeholder, required, type = "text" }: { label: string; placeholder?: string; required?: boolean; type?: string }) {
  return (
    <div>
      <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{label}</label>
      <input
        required={required}
        type={type}
        placeholder={placeholder}
        className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary transition"
      />
    </div>
  );
}
