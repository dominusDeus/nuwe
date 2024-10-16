import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/shared/card";
import { Code, Laptop, Zap, Database, Cloud, Lock } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <service.icon className="h-8 w-8 text-primary" />
                <CardTitle>{service.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

const services = [
  {
    title: "Custom Software Development",
    description:
      "We create tailored software solutions to address your unique business challenges and optimize your operations.",
    icon: Code,
  },
  {
    title: "Web Application Development",
    description:
      "Our team builds powerful, scalable, and user-friendly web applications using cutting-edge technologies.",
    icon: Laptop,
  },
  {
    title: "API Integration & Development",
    description:
      "We develop custom APIs and seamlessly integrate third-party services to enhance your software ecosystem.",
    icon: Zap,
  },
  {
    title: "Database Design & Management",
    description:
      "Our experts design efficient database structures and implement robust data management solutions.",
    icon: Database,
  },
  {
    title: "Cloud Solutions",
    description:
      "We help you leverage the power of cloud computing to improve scalability, reliability, and cost-efficiency.",
    icon: Cloud,
  },
  {
    title: "Cybersecurity Services",
    description:
      "We implement strong security measures to protect your software and data from potential threats.",
    icon: Lock,
  },
];
