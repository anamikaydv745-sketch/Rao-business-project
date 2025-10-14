import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Users, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Happy Customers" },
    { icon: TrendingUp, value: "8+", label: "Years of Service" },
    { icon: Heart, value: "1000+", label: "Meals Daily" },
    { icon: Award, value: "4.5", label: "Average Rating" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            About Rao Food Service
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Serving quality food and comfortable accommodation in Bhiwadi since 2015
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-2">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Rao Food Service was established in 2015 with a simple mission: to provide 
                  home-cooked, nutritious meals and comfortable accommodation to working professionals 
                  and bachelors in Bhiwadi's growing industrial hub.
                </p>
                <p>
                  What started as a small kitchen serving 20 meals a day has grown into a trusted 
                  food service and PG provider, now serving over 500 satisfied customers daily. 
                  Our commitment to quality, hygiene, and customer satisfaction has been the 
                  cornerstone of our success.
                </p>
                <p>
                  Today, we operate multiple PG facilities and cater to numerous offices and 
                  canteens in Bhiwadi, maintaining the same home-style cooking and personal 
                  attention that we started with.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-foreground">
            Our Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          <Card className="border-2 bg-gradient-to-br from-primary/5 to-transparent">
            <CardContent className="p-8">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide affordable, nutritious, and delicious home-cooked meals along with 
                safe and comfortable accommodation, making life easier for working professionals 
                away from home.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 bg-gradient-to-br from-secondary/5 to-transparent">
            <CardContent className="p-8">
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                <Award className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Our Values</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  Quality ingredients and hygiene in every meal
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  Customer satisfaction and trust
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  Affordable pricing without compromising quality
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  Creating a home away from home
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Team Section */}
        <Card className="max-w-4xl mx-auto bg-muted/30">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Meet the Team
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our dedicated team of experienced cooks, caretakers, and support staff work 
              tirelessly to ensure you get the best service every single day. From early 
              morning meal preparation to late-night PG maintenance, we're here for you.
            </p>
            <p className="text-sm text-muted-foreground italic">
              "We treat our customers like family, because that's exactly what you are to us."
              <br />
              <span className="font-semibold not-italic">- Rao Family</span>
            </p>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default About;
