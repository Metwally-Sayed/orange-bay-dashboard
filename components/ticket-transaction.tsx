"use client";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { TicketDetilas } from "./ui/table/columns";

type Props = {
  ticketsData: (data: TicketDetilas) => TicketDetilas;
};
export function TicketTransaction({ ticketsData }: Props) {
  const [ticketDetails, setTicketDetails] = useState({});

  return (
    <Card className="w-[450px] ml-9 ">
      <CardHeader>
        <CardTitle>Book a Ticket</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="nationality">Nationality</Label>
              <Select
                onValueChange={(value) =>
                  setTicketDetails({ ...ticketDetails, nationality: value })
                }
              >
                <SelectTrigger id="nationality">
                  <SelectValue placeholder="Select nationality" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="usa">USA</SelectItem>
                  <SelectItem value="canada">Canada</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="australia">Australia</SelectItem>
                  <SelectItem value="germany">Germany</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="tour-guide">Tour Guide</Label>
              <Select
                onValueChange={(value) =>
                  setTicketDetails({ ...ticketDetails, tourGuide: value })
                }
              >
                <SelectTrigger id="tour-guide">
                  <SelectValue placeholder="Select tour guide" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="alice-smith">Alice Smith</SelectItem>
                  <SelectItem value="bob-johnson">Bob Johnson</SelectItem>
                  <SelectItem value="diana-lee">Diana Lee</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="cruise">Cruise</Label>
              <Select
                onValueChange={(value) =>
                  setTicketDetails({ ...ticketDetails, cruise: value })
                }
              >
                <SelectTrigger id="cruise">
                  <SelectValue placeholder="Select cruise" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="cruise1">Cruise 1</SelectItem>
                  <SelectItem value="cruise2">Cruise 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="cruise">Available Tickets Today</Label>
              <Select
                onValueChange={(value) =>
                  setTicketDetails({
                    ...ticketDetails,
                    availableTickets: value,
                  })
                }
              >
                <SelectTrigger id="cruise">
                  <SelectValue placeholder="Select cruise" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="generalAdmission">
                    General Admission
                  </SelectItem>
                  <SelectItem value="premiumExperience">
                    {" "}
                    Premium Experience
                  </SelectItem>
                  <SelectItem value="groupDiscount"> Group Discount</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        {/* <Button variant="outline">Cancel</Button> */}
        <Button
          onClick={() => {
            ticketsData(ticketDetails);
          }}
        >
          Add
        </Button>
      </CardFooter>
    </Card>
  );
}
