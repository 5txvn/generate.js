//Source - https://www.randomlists.com/random-athletes
var athletes = ["Carolina Klüft","Kerri Walsh","Paula Radcliffe","Mary Pierce","April Ross","Anni Friesinger","Rebecca Adlington","Shawn Johnson","Conny Wassmuth","Yuliya Krevsun","Tatiana Gutsu","Darya Klishina","Björn Borg","Maria Sharapova","Ronda Rousey","Boris Becker","Suzy Favor-Hamilton","Michael Schuhmacher","David Beckham","Annie Thorisdottir","Sergei Kharkov","Lisa Raymond","Szilveszter Csollány","Libby Lenton","Emma Johansson","Yelena Davydova","Lauren Jackson","Desiree Ficker","Virpi Kuitunen","Tatiana Grigorieva","Britta Steffen","Ariane Friedrich","Nastia Liukin","Anna Kournikova","Elena Dementieva","Sally Mc Lellan","Melissa Breen","Jennifer Kessy","Caroline Wozniacki","Chris Evert","Tamsyn Lewis","Amy Acuff","Tatyana Ledovskaya","Alexander Karelin","Lindsey Vonn","Yelena Soboleva","Yelena Isinbayeva","Maggie Vessey","Michael Schumacher","Hannah Teter","Kajsa Bergqvist","Carrie Tollefson","Victoria Azarenka","Daniela Hantuchová","Bo Jackson","Alice Schmidt","Elena Vesnina","Angelique Kerber","Steven Hooker","Vera Dushevina","Andreas Thorkildsen","Miroslav Klose","Oliver Kahn","Ty Cobb","Simona Amânar","Katarina Witt","Michael Jordan","Sarah B&auml;ckman","Mickey Mantle","Martina Glagow","Larry Bird","Tony Hawk","Stefanie Graf","Kacie Mac Tavish","Bruce Lee","Ágnes Szávay","Lou Gehrig","Wayne Rooney","Romy Müller","Wayne Gretzky","David Pearson","Ted Williams","Maria Antonelli","Alexandr Karelin","Sofia Mattsson","Muhammad Ali","Jim Thorpe","Joe Montana","Lionel Messi","Natalie Gulbis","Sanne Keizer","Svetlana Khorkina","Bethanie Mattek","Tanja Frieden","Joe Di Maggio","Jackie Robinson","Martina Hingis","Kimberley Smith","Bill Russell","Talita Antunes","Nicole Sanderson","Marit Bjørgen","John Mc Enroe","Nicole Vaidisova","Lilli Schwarzkopf","Jesse Owens","Kathrine Maaseide","Zinedine Zidane","Willie Mays","Ana Paula Connelly","Hella Jurich","Hana Klapalová","Barry Sanders","Sabine Lisicki","Laura Ludwig","Gro Marit Istad Kristiansen","Ana Ivanović","Cy Young","Sara Goller","Rebekka Kadijk","Therese Johaug","Nadia Comănec","Usain Bolt","Evgenia Ukolova","Vera Zvonareva","Julia Mancuso","Bobby Orr","Babe Ruth","Misty May-Treanor","Ilka Semmler","Pelé","Walter Payton","Marrit Leenstra","Heike Henkel","Kareem Abdul-Jabbar","Ekaterina Khomyakova","Anke Huber","Martina Navratilova","Jerry Rice","Susanne Glesnes","Peyton Manning","Tom Brady","Roger Federer","Monica Seles","Anna Chakvetadze","Vanessa Atkinson","Astrid Kumbernuss","Barbara Rittner","Kari Traa","Katarina Witt","Magic Johnson","Wilt Chamberlain","Dan Marino","Ivan Lendl","Rieke Brink-Abeler","Grete Waitz","Jim Brown","Betty Heidler","Serena Williams","Andre Agassi","Charles Austin","Claudia Künzel","Stan Musial","Wladimir Klitschko","Larissa França","Ilona Slupianek","Bart Starr","Jelena Dokić","Alison Williamson","Evi Sachenbacher-Stehle","Vitali Klitschko","Gene Tunney","Kobe Bryant","Albert Pujols","Marina Lobatch","Nadine Broersen","Kelly Slater","Ricky Henderson","Nikolai Andrianov","Sergey Litvinov","Adriana Behar","Niki Gudex","Mia Hamm","Julie Krone","Mario Lemieux","Johnny Unitas","Michael Phelps","Ichiro Suzuki","Bart Conner","Brett Favre","Nikolai Andrianov","Edward Hennig","Alyona Bondarenko","Mike Tyson","Matthew Mitcham","Katrin Mattscherodt","Xavi","Paul Hamm","Pete Rose","Chrissie Wellington"]
var athlete = {
    generate : function() {
        return athletes[Math.floor(Math.random() * 200)]
    },
    length : function() {
        return athletes.length
    }
}