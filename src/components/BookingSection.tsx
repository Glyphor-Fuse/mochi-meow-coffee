import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Star, Users } from 'lucide-react';

export function BookingSection() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <section className="py-24 bg-accent/10">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <Badge variant="outline" className="border-secondary text-secondary">Visit Us</Badge>
          <h2 className="text-4xl md:text-5xl font-display">Plan Your Visit</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm"><ShieldCheck className="w-10 h-10 text-primary mb-4" /><h4 className="font-bold">Hygiene First</h4><p className="text-sm text-muted-foreground">Socks mandatory.</p></div>
            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm"><Users className="w-10 h-10 text-secondary mb-4" /><h4 className="font-bold">Guest Rules</h4><p className="text-sm text-muted-foreground">Be gentle with cats.</p></div>
          </div>
        </div>
        <Card className="rounded-3xl border border-primary/10 shadow-2xl overflow-hidden">
          <CardHeader className="bg-primary text-primary-foreground p-8"><CardTitle className="flex items-center gap-3"><Star className="w-6 h-6" /> Live Availability</CardTitle></CardHeader>
          <CardContent className="p-6 grid md:grid-cols-2 gap-6">
            <Calendar mode="single" selected={date} onSelect={setDate} className="mx-auto" />
            <div className="space-y-4">
              <Button className="w-full rounded-xl">10:00 AM</Button>
              <Button className="w-full rounded-xl">01:00 PM</Button>
              <Button className="w-full rounded-xl">04:00 PM</Button>
              <Button className="w-full rounded-xl" disabled>Proceed</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default BookingSection;
