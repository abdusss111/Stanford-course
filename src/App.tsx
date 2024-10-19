import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { MessageSquare, Search, User, Home, Calendar as CalendarIcon, CreditCard, Upload, AlertTriangle, Settings, X, Building, Bed } from 'lucide-react'

export default function UniversityDormitorySystem() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [selectedHousing, setSelectedHousing] = useState("")
  const [selectedFloor, setSelectedFloor] = useState("")

  const housings = ["Housing A", "Housing B", "Housing C"]
  const floors = ["1st Floor", "2nd Floor", "3rd Floor", "4th Floor", "5th Floor"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-8">
      <Card className="max-w-4xl mx-auto shadow-2xl rounded-[20px] overflow-hidden border-t-4 border-blue-500">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
          <CardTitle className="text-4xl font-bold flex items-center">
            <Building className="mr-4 h-8 w-8" />
            University Dormitory System
          </CardTitle>
          <CardDescription className="text-blue-100 text-lg mt-2">Book your room, manage your stay, and get support</CardDescription>
        </CardHeader>
        <CardContent className="p-8">
          <Tabs defaultValue="search" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3 gap-4">
              <TabsTrigger value="search" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all duration-200">
                <Search className="mr-2 h-4 w-4" />
                Search & Book
              </TabsTrigger>
              <TabsTrigger value="myroom" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white transition-all duration-200">
                <Home className="mr-2 h-4 w-4" />
                My Room
              </TabsTrigger>
              <TabsTrigger value="profile" className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white transition-all duration-200">
                <User className="mr-2 h-4 w-4" />
                My Profile
              </TabsTrigger>
            </TabsList>
            <TabsContent value="search">
              <div className="space-y-8">
                <div className="flex space-x-4">
                  <Input placeholder="Search for rooms..." className="flex-grow" />
                  <Button className="bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
                    <Search className="mr-2 h-4 w-4" /> Search
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="shadow-md hover:shadow-lg transition-shadow duration-200">
                    <CardHeader>
                      <CardTitle className="flex items-center text-blue-600">
                        <CalendarIcon className="mr-2 h-5 w-5" /> Select Move-in Date
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        className="rounded-md border"
                      />
                    </CardContent>
                  </Card>
                  <Card className="shadow-md hover:shadow-lg transition-shadow duration-200">
                    <CardHeader>
                      <CardTitle className="flex items-center text-purple-600">
                        <Home className="mr-2 h-5 w-5" /> Housing & Floor
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Select onValueChange={setSelectedHousing}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Housing" />
                        </SelectTrigger>
                        <SelectContent>
                          {housings.map((housing) => (
                            <SelectItem key={housing} value={housing}>{housing}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Select onValueChange={setSelectedFloor} disabled={!selectedHousing}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Floor" />
                        </SelectTrigger>
                        <SelectContent>
                          {floors.map((floor) => (
                            <SelectItem key={floor} value={floor}>{floor}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </CardContent>
                  </Card>
                </div>
                <Card className="shadow-md hover:shadow-lg transition-shadow duration-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-600">
                      <Bed className="mr-2 h-5 w-5" /> Available Rooms
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[200px] pr-4">
                      <ul className="space-y-4">
                        {[
                          { type: "3-Person Room", price: "60,000" },
                          { type: "4-Person Room", price: "55,000" },
                          { type: "5-Person Room", price: "52,000" },
                          { type: "6-Person Room", price: "48,000" },
                        ].map((room, index) => (
                          <li key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                            <span className="font-medium">{room.type}</span>
                            <Badge variant="secondary" className="bg-green-100 text-green-800">
                              {room.price} tenge/month
                            </Badge>
                          </li>
                        ))}
                      </ul>
                    </ScrollArea>
                  </CardContent>
                </Card>
                <Card className="shadow-md hover:shadow-lg transition-shadow duration-200">
                  <CardHeader>
                    <CardTitle className="text-orange-600">Exemption Rights</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      "Large Family",
                      "Financial Aid Recipient",
                      "Single-Parent Family",
                      "Orphan",
                      "From Another City"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Checkbox id={item.toLowerCase().replace(/\s+/g, '-')} />
                        <Label htmlFor={item.toLowerCase().replace(/\s+/g, '-')}>{item}</Label>
                      </div>
                    ))}
                    <Separator className="my-4" />
                    <div className="space-y-2">
                      <Label htmlFor="file-upload">Upload Supporting Documents</Label>
                      <Input id="file-upload" type="file" multiple />
                    </div>
                  </CardContent>
                </Card>
                <Button className="w-full bg-green-600 hover:bg-green-700 transition-colors duration-200 text-lg py-6">
                  Apply for Room
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="myroom">
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-purple-600">
                    <Home className="mr-2 h-5 w-5" /> My Room
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-xl text-purple-800">Room 301 (4-Person Room)</h3>
                    <p className="text-purple-600">Move-in Date: September 1, 2024</p>
                    <p className="text-purple-600">Monthly Rent: 55,000 tenge</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="w-full hover:bg-red-50 hover:text-red-600 transition-colors duration-200">
                      <AlertTriangle className="mr-2 h-4 w-4" /> Report a Problem
                    </Button>
                    <Button variant="outline" className="w-full hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                      <CreditCard className="mr-2 h-4 w-4" /> View Payments
                    </Button>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Roommates</h4>
                    <ul className="space-y-4">
                      {[
                        { name: "John Doe", image: "/placeholder-avatar-1.jpg" },
                        { name: "Jane Smith", image: "/placeholder-avatar-2.jpg" },
                        { name: "Robert Johnson", image: "/placeholder-avatar-3.jpg" },
                      ].map((roommate, index) => (
                        <li key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={roommate.image} />
                            <AvatarFallback>{roommate.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <span className="font-medium">{roommate.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="profile">
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-indigo-600">
                    <User className="mr-2 h-5 w-5" /> My Profile
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4 bg-indigo-50 p-6 rounded-lg">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src="/placeholder-avatar.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-2xl font-semibold text-indigo-800">John Doe</h3>
                      <p className="text-indigo-600">john.doe@university.edu</p>
                      <Badge className="mt-2 bg-indigo-200 text-indigo-800">Undergraduate</Badge>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { label: "Major", value: "Computer Science" },
                      { label: "Year", value: "Sophomore" },
                      { label: "Student ID", value: "12345678" },
                      { label: "Phone Number", value: "(555) 123-4567" },
                    ].map((item, index) => (
                      <div key={index}>
                        <Label htmlFor={item.label.toLowerCase().replace(/\s+/g, '-')}>{item.label}</Label>
                        <Input id={item.label.toLowerCase().replace(/\s+/g, '-')} value={item.value} readOnly className="bg-gray-50" />
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200">
                    <Settings className="mr-2 h-4 w-4" /> Edit Profile
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between bg-gray-100 p-6">
          <Button variant="outline" className="bg-white text-gray-700 hover:bg-gray-200 transition-colors duration-200">
            <User className="mr-2 h-4 w-4" /> Contact Dorm Admin
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg font-semibold transition-colors duration-200" onClick={() => setIsChatOpen(true)}>
            <MessageSquare className="mr-2 h-5 w-5" /> Chat with AI Support
          </Button>
        </CardFooter>
      </Card>
      {isChatOpen && (
        <div className="fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-2xl overflow-hidden border border-blue-200 animate-in slide-in-from-bottom-5">
          <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <h3 className="font-semibold flex items-center">
              <MessageSquare className="mr-2 h-5 w-5" />
              AI Support Chat
            </h3>
            <Button variant="ghost" size="icon" onClick={() => setIsChatOpen(false)} className="text-white hover:bg-blue-700">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div  className="h-64 p-4 overflow-y-auto">
            <p className="text-gray-600 bg-blue-50 p-3 rounded-lg inline-block">How can I assist you today?</p>
          </div>
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <Input placeholder="Type your message..." className="flex-grow" />
              <Button size="icon" className="bg-blue-600 hover:bg-blue-700 text-white">
                <MessageSquare className="h-4 w-4" />
                <span className="sr-only">Send message</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
