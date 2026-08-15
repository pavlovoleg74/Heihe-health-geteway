import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  component: Privacy,
  head: () => ({
    meta: [
      { title: "Политика конфиденциальности — Мост Здоровья • Хэйхэ" },
      {
        name: "description",
        content:
          "Политика обработки персональных данных проекта «Мост Здоровья • Хэйхэ». Официальный текст документа будет опубликован после получения материалов от партнёра.",
      },
      { property: "og:title", content: "Политика конфиденциальности — Мост Здоровья • Хэйхэ" },
      {
        property: "og:description",
        content: "Политика обработки персональных данных проекта «Мост Здоровья • Хэйхэ».",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://heihe-health-bridge.lovable.app/privacy" }],
  }),
});

function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> На главную
        </Link>
        <h1 className="text-4xl md:text-5xl font-semibold mb-6">
          Политика конфиденциальности
        </h1>
        <div className="rounded-2xl border border-border bg-card p-8 space-y-4 text-sm leading-relaxed text-muted-foreground">
          <p>
            Здесь будет размещён официальный текст Политики конфиденциальности
            проекта «Мост Здоровья • Хэйхэ» (Health Bridge Heihe).
          </p>
          <p>
            Оставляя заявку на сайте, вы соглашаетесь на обработку указанных вами
            данных исключительно с целью связи по вашему запросу об организации
            поездки.
          </p>
          <p>
            См. также{" "}
            <Link to="/consent" className="underline hover:text-foreground transition">
              Согласие на обработку персональных данных
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
