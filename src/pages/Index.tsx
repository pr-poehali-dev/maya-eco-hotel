import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    dates: '',
    guests: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', email: '', dates: '', guests: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img 
                src="https://cdn.poehali.dev/files/26ac807f-d1c7-4bce-ae0d-6e1f5f1426f7.jpg" 
                alt="Майя Лого" 
                className="h-12 w-12 object-contain"
              />
              <span className="text-2xl font-heading font-bold text-primary">ЭКО отель Майя</span>
            </div>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('hero')} className="text-foreground hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('accommodation')} className="text-foreground hover:text-primary transition-colors">Размещение</button>
              <button onClick={() => scrollToSection('fishing')} className="text-foreground hover:text-primary transition-colors">Рыбалка</button>
              <button onClick={() => scrollToSection('gallery')} className="text-foreground hover:text-primary transition-colors">Галерея</button>
              <button onClick={() => scrollToSection('booking')} className="text-foreground hover:text-primary transition-colors">Бронирование</button>
              <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors">Контакты</button>
            </div>
            <Button onClick={() => scrollToSection('booking')} className="bg-primary hover:bg-primary/90">
              Забронировать
            </Button>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-accent/5 to-primary/10"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground leading-tight">
                Откройте для себя уникальный отдых на природе
              </h1>
              <p className="text-xl text-muted-foreground">
                Уютные 8-местные палатки с видом на озеро. Рыбалка, семейный и корпоративный отдых в гармонии с природой. Беларусь.
              </p>
              <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg">
                <p className="text-lg font-semibold text-foreground mb-1">От 300 руб/сутки</p>
                <p className="text-sm text-muted-foreground">Скидки при длительном проживании</p>
              </div>
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('booking')}
                  className="bg-primary hover:bg-primary/90 text-white px-8"
                >
                  Забронировать сейчас
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => scrollToSection('accommodation')}
                  className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white"
                >
                  Узнать больше
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-heading font-bold text-primary">8</div>
                  <div className="text-sm text-muted-foreground">мест в палатке</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">на природе</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">поддержка</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
              <img 
                src="https://cdn.poehali.dev/files/2b30e343-e2d3-4c41-9bb5-4baacff6402c.jpg" 
                alt="Глэмпинг палатка" 
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="accommodation" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">Размещение</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Комфортабельные глэмпинг-палатки с видом на озеро
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <Card className="border-2 border-primary/20 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5">
                <CardTitle className="font-heading text-3xl text-center">Цены на проживание</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-secondary/5 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Icon name="Calendar" className="text-secondary" size={24} />
                        <span className="font-semibold">Будние дни</span>
                      </div>
                      <span className="text-2xl font-heading font-bold text-secondary">300₽</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-accent/5 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Icon name="PartyPopper" className="text-accent" size={24} />
                        <span className="font-semibold">Выходные/праздники</span>
                      </div>
                      <span className="text-2xl font-heading font-bold text-accent">400₽</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-heading font-semibold text-lg mb-3">Скидки при длительном проживании:</h4>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="TrendingDown" size={18} className="text-primary" />
                      <span>2-е сутки: <strong>-30%</strong> от базовой цены</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="TrendingDown" size={18} className="text-primary" />
                      <span>3-и сутки и далее: <strong>-50%</strong> от базовой цены</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Users" size={18} className="text-primary" />
                      <span>Каждый доп. человек: <strong>+50₽</strong></span>
                    </div>
                    <div className="flex items-center gap-2 text-accent font-semibold">
                      <Icon name="Baby" size={18} />
                      <span>Дети до 7 лет: <strong>бесплатно</strong></span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground text-center">
                    <Icon name="Info" size={16} className="inline mr-2" />
                    Дети до 7 лет спят с родителями. Детская кроватка предоставляется по запросу.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Tent" className="text-secondary" size={32} />
                </div>
                <CardTitle className="font-heading text-2xl">Ятный паль</CardTitle>
                <CardDescription>8-местная глэмпинг палатка</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="Users" size={20} />
                  <span>До 8 человек</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="Bed" size={20} />
                  <span>Комфортные спальные места</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="Waves" size={20} />
                  <span>Вид на озеро</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="Zap" size={20} />
                  <span>Электричество и освещение</span>
                </div>
                <Button className="w-full mt-4 bg-secondary hover:bg-secondary/90" onClick={() => scrollToSection('booking')}>
                  Узнать больше
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="TreePine" className="text-accent" size={32} />
                </div>
                <CardTitle className="font-heading text-2xl">Удобства</CardTitle>
                <CardDescription>Все для комфортного отдыха</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="Utensils" size={20} />
                  <span>Зона для приготовления еды</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="Flame" size={20} />
                  <span>Костровое место</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="ShowerHead" size={20} />
                  <span>Санузлы на территории</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="Wifi" size={20} />
                  <span>Wi-Fi зона</span>
                </div>
                <Button className="w-full mt-4 bg-accent hover:bg-accent/90" onClick={() => scrollToSection('booking')}>
                  Забронировать
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Star" className="text-primary" size={32} />
                </div>
                <CardTitle className="font-heading text-2xl">Сервис</CardTitle>
                <CardDescription>Заботимся о вашем комфорте</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="Clock" size={20} />
                  <span>Заезд 24/7</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="Shield" size={20} />
                  <span>Охраняемая территория</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="CarFront" size={20} />
                  <span>Парковка у палатки</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="Heart" size={20} />
                  <span>Помощь в организации</span>
                </div>
                <Button className="w-full mt-4 bg-primary hover:bg-primary/90" onClick={() => scrollToSection('booking')}>
                  Связаться с нами
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="fishing" className="py-20 bg-gradient-to-br from-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">Рыбалка всей семьёй</h2>
              <p className="text-lg text-muted-foreground">
                Насладитесь спокойной рыбалкой на берегу живописного озера. У нас есть все условия для комфортного отдыха с удочкой — от профессионалов до новичков.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-secondary text-white rounded-full p-2 mt-1">
                    <Icon name="Fish" size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">Богатое озеро</h3>
                    <p className="text-muted-foreground">Карп, щука, окунь и другие виды рыб</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-accent text-white rounded-full p-2 mt-1">
                    <Icon name="Package" size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">Аренда снастей</h3>
                    <p className="text-muted-foreground">Все необходимое оборудование на месте</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary text-white rounded-full p-2 mt-1">
                    <Icon name="Users" size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">Для всей компании</h3>
                    <p className="text-muted-foreground">Идеально для семейного и корпоративного отдыха</p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="bg-secondary hover:bg-secondary/90" onClick={() => scrollToSection('booking')}>
                Забронировать место
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-secondary/5 rounded-xl">
                    <Icon name="Fish" className="mx-auto mb-2 text-secondary" size={32} />
                    <div className="text-2xl font-heading font-bold text-foreground">5+</div>
                    <div className="text-sm text-muted-foreground">видов рыб</div>
                  </div>
                  <div className="text-center p-4 bg-accent/5 rounded-xl">
                    <Icon name="Users" className="mx-auto mb-2 text-accent" size={32} />
                    <div className="text-2xl font-heading font-bold text-foreground">8</div>
                    <div className="text-sm text-muted-foreground">мест в компании</div>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded-xl">
                    <Icon name="TreePine" className="mx-auto mb-2 text-primary" size={32} />
                    <div className="text-2xl font-heading font-bold text-foreground">100%</div>
                    <div className="text-sm text-muted-foreground">экологично</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/5 rounded-xl">
                    <Icon name="Heart" className="mx-auto mb-2 text-secondary" size={32} />
                    <div className="text-2xl font-heading font-bold text-foreground">24/7</div>
                    <div className="text-sm text-muted-foreground">поддержка</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">Галерея</h2>
            <p className="text-xl text-muted-foreground">Наши уютные палатки и природа вокруг</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="col-span-2 row-span-2 relative overflow-hidden rounded-2xl group">
              <img 
                src="https://cdn.poehali.dev/files/2b30e343-e2d3-4c41-9bb5-4baacff6402c.jpg" 
                alt="Глэмпинг" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <h3 className="font-heading text-2xl font-bold mb-2">Уютные палатки</h3>
                  <p>Комфорт и близость к природе</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800" 
                alt="Природа" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <h3 className="font-heading text-xl font-bold">Кемпинг</h3>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800" 
                alt="Озеро" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <h3 className="font-heading text-xl font-bold">Озеро</h3>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1532339142463-fd0a8979791a?w=800" 
                alt="Рыбалка" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <h3 className="font-heading text-xl font-bold">Рыбалка</h3>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1571863533956-01c88e79957e?w=800" 
                alt="Костер" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <h3 className="font-heading text-xl font-bold">Костер</h3>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800" 
                alt="Отдых" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <h3 className="font-heading text-xl font-bold">Отдых</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">Бронирование</h2>
              <p className="text-xl text-muted-foreground">Заполните форму и мы свяжемся с вами</p>
            </div>
            <Card className="border-2 shadow-xl">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Имя *</Label>
                      <Input 
                        id="name" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Ваше имя"
                        className="border-2"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input 
                        id="phone" 
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+7 (___) ___-__-__"
                        className="border-2"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your@email.com"
                      className="border-2"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="dates">Даты заезда *</Label>
                      <Input 
                        id="dates" 
                        required
                        value={formData.dates}
                        onChange={(e) => setFormData({...formData, dates: e.target.value})}
                        placeholder="01.12 - 05.12"
                        className="border-2"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="guests">Количество гостей *</Label>
                      <Input 
                        id="guests" 
                        type="number"
                        required
                        min="1"
                        max="8"
                        value={formData.guests}
                        onChange={(e) => setFormData({...formData, guests: e.target.value})}
                        placeholder="1-8 человек"
                        className="border-2"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Дополнительные пожелания</Label>
                    <Textarea 
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Расскажите о ваших пожеланиях..."
                      className="min-h-32 border-2"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-lg">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">Мы всегда на связи</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" className="text-primary" size={28} />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">Телефон</h3>
                <a href="tel:+375333045407" className="text-primary hover:underline font-semibold">+375 (33) 304-54-07</a>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" className="text-secondary" size={28} />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">Email</h3>
                <p className="text-muted-foreground">info@maya-hotel.ru</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" className="text-accent" size={28} />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">Адрес</h3>
                <p className="text-muted-foreground">Беларусь</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/26ac807f-d1c7-4bce-ae0d-6e1f5f1426f7.jpg" 
                  alt="Майя" 
                  className="h-10 w-10 object-contain brightness-0 invert"
                />
                <span className="text-xl font-heading font-bold">ЭКО отель Майя</span>
              </div>
              <p className="text-background/80">Уникальный отдых на природе в гармонии с собой</p>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">Навигация</h3>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('hero')} className="block text-background/80 hover:text-background">Главная</button>
                <button onClick={() => scrollToSection('accommodation')} className="block text-background/80 hover:text-background">Размещение</button>
                <button onClick={() => scrollToSection('fishing')} className="block text-background/80 hover:text-background">Рыбалка</button>
                <button onClick={() => scrollToSection('gallery')} className="block text-background/80 hover:text-background">Галерея</button>
              </div>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">Услуги</h3>
              <div className="space-y-2">
                <p className="text-background/80">Проживание в палатках</p>
                <p className="text-background/80">Рыбалка</p>
                <p className="text-background/80">Корпоративы</p>
                <p className="text-background/80">Семейный отдых</p>
              </div>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">Контакты</h3>
              <div className="space-y-2">
                <a href="tel:+375333045407" className="block text-background/80 hover:text-background">+375 (33) 304-54-07</a>
                <p className="text-background/80">info@maya-hotel.ru</p>
                <p className="text-background/80">Беларусь</p>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/60">
            <p>&copy; 2024 ЭКО отель Майя. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;