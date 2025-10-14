import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Clock, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Menu = () => {
  // Get today's day
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  
  // Mock data - will be replaced with Lovable Cloud database
  const weeklyMenu = {
    Monday: {
      lunch: ["Dal Fry", "Aloo Gobhi", "Roti (4 pcs)", "Rice", "Salad"],
      dinner: ["Rajma Masala", "Mix Veg", "Roti (4 pcs)", "Rice", "Pickle"]
    },
    Tuesday: {
      lunch: ["Chole", "Baingan Bharta", "Roti (4 pcs)", "Rice", "Salad"],
      dinner: ["Kadhi Pakora", "Bhindi Fry", "Roti (4 pcs)", "Rice", "Papad"]
    },
    Wednesday: {
      lunch: ["Paneer Curry", "Aloo Matar", "Roti (4 pcs)", "Rice", "Salad"],
      dinner: ["Dal Makhani", "Cabbage Sabzi", "Roti (4 pcs)", "Rice", "Pickle"]
    },
    Thursday: {
      lunch: ["Kala Chana", "Palak Paneer", "Roti (4 pcs)", "Rice", "Salad"],
      dinner: ["Rajma", "Aloo Jeera", "Roti (4 pcs)", "Rice", "Raita"]
    },
    Friday: {
      lunch: ["Dal Tadka", "Mix Veg", "Roti (4 pcs)", "Rice", "Salad"],
      dinner: ["Chole Masala", "Lauki Sabzi", "Roti (4 pcs)", "Rice", "Pickle"]
    },
    Saturday: {
      lunch: ["Paneer Butter Masala", "Aloo Gobi", "Roti (4 pcs)", "Rice", "Salad"],
      dinner: ["Kadhi", "Bhindi Masala", "Roti (4 pcs)", "Rice", "Papad"]
    },
    Sunday: {
      lunch: ["Special Dal", "Seasonal Veg", "Roti (5 pcs)", "Biryani", "Salad", "Sweet"],
      dinner: ["Rajma", "Paneer Curry", "Roti (4 pcs)", "Rice", "Raita"]
    }
  };

  const todayMenu = weeklyMenu[today as keyof typeof weeklyMenu] || weeklyMenu.Monday;

  const [ratings, setRatings] = useState({
    lunch: 0,
    dinner: 0
  });

  const handleRating = (mealType: 'lunch' | 'dinner', rating: number) => {
    setRatings(prev => ({ ...prev, [mealType]: rating }));
    toast.success(`Thank you! You rated ${mealType} ${rating} stars`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Clock className="h-3 w-3 mr-1" />
            Updated Daily
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Today's Menu
          </h1>
          <p className="text-xl text-muted-foreground mb-2">
            {today}, {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fresh, home-cooked meals prepared daily with quality ingredients
          </p>
        </div>

        {/* Menu Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Lunch */}
          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader className="bg-gradient-to-br from-primary/10 to-transparent">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                Lunch
              </CardTitle>
              <p className="text-sm text-muted-foreground">12:00 PM - 2:00 PM</p>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3 mb-6">
                {todayMenu.lunch.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-2">Rate this meal:</p>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => handleRating('lunch', star)}
                      className="transition-transform hover:scale-110"
                    >
                      <Star
                        className={`h-6 w-6 ${
                          star <= ratings.lunch
                            ? "fill-primary text-primary"
                            : "text-muted-foreground"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dinner */}
          <Card className="border-2 hover:border-secondary/50 transition-colors">
            <CardHeader className="bg-gradient-to-br from-secondary/10 to-transparent">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-secondary" />
                </div>
                Dinner
              </CardTitle>
              <p className="text-sm text-muted-foreground">7:00 PM - 9:00 PM</p>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3 mb-6">
                {todayMenu.dinner.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-2">Rate this meal:</p>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => handleRating('dinner', star)}
                      className="transition-transform hover:scale-110"
                    >
                      <Star
                        className={`h-6 w-6 ${
                          star <= ratings.dinner
                            ? "fill-secondary text-secondary"
                            : "text-muted-foreground"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quantity Options */}
        <Card className="max-w-5xl mx-auto mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Order Options
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border-2 border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="text-lg font-semibold mb-2 text-foreground">Single Meal</h3>
                <p className="text-muted-foreground mb-4">Perfect for individuals</p>
                <p className="text-2xl font-bold text-primary mb-4">₹80-120 per meal</p>
                <Button className="w-full">Order Now</Button>
              </div>
              
              <div className="p-6 border-2 border-border rounded-lg hover:border-secondary transition-colors">
                <h3 className="text-lg font-semibold mb-2 text-foreground">Bulk Order</h3>
                <p className="text-muted-foreground mb-4">For offices & events (10+ meals)</p>
                <p className="text-2xl font-bold text-secondary mb-4">Special Pricing</p>
                <Button variant="secondary" className="w-full">Contact Us</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Info Box */}
        <Card className="max-w-5xl mx-auto bg-muted/50">
          <CardContent className="p-6 text-center">
            <p className="text-muted-foreground">
              <strong>Note:</strong> Menu is subject to change based on ingredient availability. 
              All meals are prepared fresh daily in our hygienic kitchen.
            </p>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Menu;
