import { Award, Shield, Heart, Users } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion/fade-up";
import { whySkyRiders } from "@/data/testimonials";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Award,
  Shield,
  Heart,
  Users,
};

export function WhySkyRiders() {
  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <FadeUp className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-500">
            Why SkyRiders
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Nepal&apos;s Premier Paragliding Experience
          </h2>
        </FadeUp>

        <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whySkyRiders.map((item) => {
            const Icon = iconMap[item.icon] ?? Award;
            return (
              <StaggerItem key={item.title}>
                <div className="rounded-2xl bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50">
                    <Icon className="h-7 w-7 text-sky-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
