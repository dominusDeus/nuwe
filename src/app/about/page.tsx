import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/shared/card";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">About Nuwe</h1>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            Founded in 2010, Nuwe has been at the forefront of software
            innovation for over a decade. Our journey began with a simple
            mission: to empower businesses through technology.
          </p>
          <p className="text-muted-foreground">
            Today, we're proud to have served hundreds of clients across various
            industries, helping them transform their operations and achieve
            their goals through custom software solutions.
          </p>
        </div>
        <div className="relative h-64 md:h-full">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
            alt="Team collaboration"
            fill
            className="rounded-lg object-cover"
          />
        </div>
      </div>

      <h2 className="text-3xl font-semibold mb-8 text-center">
        Our Core Values
      </h2>
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {coreValues.map((value, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{value.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{value.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Join Our Team</h2>
        <p className="text-muted-foreground mb-8">
          We're always looking for talented individuals to join our growing
          team. If you're passionate about technology and innovation, we'd love
          to hear from you!
        </p>
        <a href="/careers" className="text-primary hover:underline">
          View Open Positions
        </a>
      </div>
    </div>
  );
}

const coreValues = [
  {
    title: "Innovation",
    description:
      "We constantly push the boundaries of what's possible in software development.",
  },
  {
    title: "Client-Centric",
    description:
      "Our clients' success is our top priority. We work closely with them to deliver tailored solutions.",
  },
  {
    title: "Quality",
    description:
      "We maintain the highest standards in our code, processes, and client interactions.",
  },
];
