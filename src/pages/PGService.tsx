import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bed, Wifi, Wind, Utensils, Shield, Users, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const PGService = () => {
  // Mock data - will be replaced with Lovable Cloud database
  const pgRooms = [
    {
      id: 1,
      roomNumber: "101",
      type: "Single",
      capacity: 1,
      price: 6000,
      amenities: ["WiFi", "AC", "Attached Bathroom", "Meals Included", "24/7 Water"],
      available: true,
      rating: 4.5
    },
    {
      id: 2,
      roomNumber: "102",
      type: "Double Sharing",
      capacity: 2,
      price: 4500,
      amenities: ["WiFi", "Fan", "Attached Bathroom", "Meals Included", "24/7 Water"],
      available: true,
      rating: 4.3
    },
    {
      id: 3,
      roomNumber: "201",
      type: "Triple Sharing",
      capacity: 3,
      price: 3500,
      amenities: ["WiFi", "Fan", "Common Bathroom", "Meals Included", "Laundry"],
      available: true,
      rating: 4.0
    },
    {
      id: 4,
      roomNumber: "202",
      type: "Single AC",
      capacity: 1,
      price: 7500,
      amenities: ["WiFi", "AC", "Attached Bathroom", "Meals Included", "TV", "Fridge"],
      available: false,
      rating: 4.8
    }
  ];

  const commonAmenities = [
    { icon: Wifi, name: "High-Speed WiFi" },
    { icon: Wind, name: "AC Rooms Available" },
    { icon: Utensils, name: "Daily Meals" },
    { icon: Shield, name: "24/7 Security" },
  ];

  const handleContact = (roomNumber: string) => {
    toast.success(`Request sent for Room ${roomNumber}. We'll contact you shortly!`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Bed className="h-3 w-3 mr-1" />
            Comfortable Living
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            PG Service for Bachelors
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Safe, comfortable, and affordable accommodation with daily meals in Bhiwadi
          </p>
        </div>

        {/* Common Amenities */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center text-foreground">Common Facilities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {commonAmenities.map((amenity, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <amenity.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="font-medium text-sm text-foreground">{amenity.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Available Rooms */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center text-foreground">Available Rooms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {pgRooms.map((room) => (
              <Card 
                key={room.id} 
                className={`border-2 hover:shadow-lg transition-all ${
                  room.available ? 'hover:border-primary/50' : 'opacity-75'
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-1">
                        Room {room.roomNumber}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">{room.type}</p>
                    </div>
                    <Badge variant={room.available ? "default" : "secondary"}>
                      {room.available ? "Available" : "Occupied"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        Capacity: {room.capacity} {room.capacity === 1 ? 'person' : 'persons'}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 mb-4">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="text-sm font-medium">{room.rating}</span>
                      <span className="text-sm text-muted-foreground ml-1">rating</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-semibold mb-2 text-foreground">Amenities:</p>
                    <div className="flex flex-wrap gap-2">
                      {room.amenities.map((amenity, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <p className="text-2xl font-bold text-primary">₹{room.price}</p>
                      <p className="text-xs text-muted-foreground">per month</p>
                    </div>
                    <Button 
                      onClick={() => handleContact(room.roomNumber)}
                      disabled={!room.available}
                      className={room.available ? '' : 'opacity-50'}
                    >
                      {room.available ? 'Contact Now' : 'Not Available'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/10 to-transparent">
            <CardContent className="p-6">
              <h3 className="font-bold mb-2 text-foreground">Payment Terms</h3>
              <p className="text-sm text-muted-foreground">
                1 month rent + 1 month security deposit. Monthly payment on 1st of every month.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-secondary/10 to-transparent">
            <CardContent className="p-6">
              <h3 className="font-bold mb-2 text-foreground">House Rules</h3>
              <p className="text-sm text-muted-foreground">
                No smoking inside rooms. Visitors allowed till 9 PM. Maintain cleanliness.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent/10 to-transparent">
            <CardContent className="p-6">
              <h3 className="font-bold mb-2 text-foreground">Location</h3>
              <p className="text-sm text-muted-foreground">
                Near industrial area, 5 min walk to bus stop. Markets and ATMs nearby.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PGService;
