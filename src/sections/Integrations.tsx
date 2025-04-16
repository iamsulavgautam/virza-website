import Tag from "@/components/Tag";
// import notionIcon from "@/assets/images/notion-logo.svg";
import appDev from "@/assets/images/appdev.svg";
import webDesign from "@/assets/images/webDesign.svg";
import uiIcon from "@/assets/images/uiux.svg";
import mlIcon from "@/assets/images/ml.svg";
import IntegrationColumn from "@/components/IntegrationsColumn";

const integrations = [
  {
    name: "UI/UX",
    icon: uiIcon,
    description: "Design your app and websites",
  },

  {
    name: "App Dev",
    icon: appDev,
    description: "Develop apps as per your requirements.",
  },
  {
    name: "Web Dev",
    icon: webDesign,
    description: "Develop website to feature you and your brands",
  },

  {
    name: "ML/AI",
    icon: mlIcon,
    description: "Build smart, data-driven applications with ML and AI",
  },
];

export type IntegrationsType = typeof integrations;

export default function Integrations() {
  return (
    <section className="py-24 overflow-hidden " id="integrations">
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16">
          <div>
            <Tag>Integration</Tag>
            <h2 className="text-6xl font-medium mt-6">
              Built to <span className="text-lime-400 ">connect</span>
            </h2>

            <p className="text-white/50 mt-4 text-lg">
              Virza doesn’t just work. It syncs — across your favorite tools and
              platforms. From design to deployment, we plug into your process
              like magic.
            </p>
          </div>
          <div>
            <div className="grid md:grid-cols-2 gap-4 lg:h-[800px] h-[400px] lg:mt-0 mt-8 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
              <IntegrationColumn integrations={integrations} />
              <IntegrationColumn
                integrations={integrations.slice().reverse()}
                className="hidden md:flex"
                reverse
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
