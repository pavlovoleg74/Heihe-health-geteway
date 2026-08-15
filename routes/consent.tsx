import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/consent")({
  component: Consent,
  head: () => ({
    meta: [
      { title: "Согласие на обработку персональных данных — Мост Здоровья • Хэйхэ" },
      {
        name: "description",
        content:
          "Текст согласия на обработку персональных данных для заявок на сайте проекта «Мост Здоровья • Хэйхэ».",
      },
      {
        property: "og:title",
        content: "Согласие на обработку персональных данных — Мост Здоровья • Хэйхэ",
      },
      {
        property: "og:description",
        content: "Согласие на обработку персональных данных проекта «Мост Здоровья • Хэйхэ».",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://heihe-health-bridge.lovable.app/consent" }],
  }),
});

function Consent() {
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
          Согласие на обработку персональных данных
        </h1>
        <div className="rounded-2xl border border-border bg-card p-8 space-y-4 text-sm leading-relaxed text-muted-foreground">
          <p>
            Здесь будет размещён официальный текст согласия на обработку
            персональных данных проекта «Мост Здоровья • Хэйхэ» (Health Bridge
            Heihe).
          </p>
          <p>
            Отмечая соответствующий пункт в форме заявки, вы подтверждаете
            согласие на обработку указанных вами данных с целью связи и
            организации поездки.
          </p>
          <p>
            См. также{" "}
            <Link to="/privacy" className="underline hover:text-foreground transition">
              Политику конфиденциальности
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
