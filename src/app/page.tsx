import Link from "next/link";
import { Button } from "@/components/shared/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/shared/card";
import { ArrowRight, Code, Laptop, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">
          TechSolutions: Your Software Partner
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Empowering businesses with cutting-edge software solutions
        </p>
        <Button asChild size="lg">
          <Link href="/contact">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </header>

      <section className="grid md:grid-cols-3 gap-8 mb-16">
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <service.icon className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
        <p className="text-lg text-muted-foreground mb-8">
          With years of experience and a passion for innovation, we deliver
          software solutions that drive your business forward.
        </p>
        <Button asChild variant="outline">
          <Link href="/about">Learn More About Us</Link>
        </Button>
      </section>
    </div>
  );
}

const services = [
  {
    title: "Custom Software Development",
    description:
      "Tailored solutions to meet your unique business needs and challenges.",
    icon: Code,
  },
  {
    title: "Web Application Development",
    description:
      "Powerful and scalable web applications using the latest technologies.",
    icon: Laptop,
  },
  {
    title: "API Integration & Development",
    description:
      "Seamless integration of third-party services and custom API development.",
    icon: Zap,
  },
];
