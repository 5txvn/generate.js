//Source - https://www.randomlists.com/random-us-presidents
var presidents = [{"name":"George Washington","detail":"#1. Served: 1789-1797","img":"george_washington"},{
	"name":"John Adams","detail":"#2. Served: 1797-1801","img":"john_adams"},{
	"name":"Thomas Jefferson","detail":"#3. Served: 1801-1809","img":"thomas_jefferson"},{
	"name":"James Madison","detail":"#4. Served: 1809-1817","img":"james_madison"},{
	"name":"James Monroe","detail":"#5. Served: 1817-1825","img":"james_monroe"},{
	"name":"John Quincy Adams","detail":"#6. Served: 1825-1829","img":"john_quincy_adams"},{
	"name":"Andrew Jackson","detail":"#7. Served: 1829-1837","img":"andrew_jackson"},{
	"name":"Martin Van Buren","detail":"#8. Served: 1837-1841","img":"martin_van_buren"},{
	"name":"William Harrison","detail":"#9. Served: 1841","img":"william_harrison"},{
	"name":"John Tyler","detail":"#10. Served: 1841-1845","img":"john_tyler"},{
	"name":"James Polk","detail":"#11. Served: 1845-1849","img":"james_polk"},{
	"name":"Zachary Taylor","detail":"#12. Served: 1849-1850","img":"zachary_taylor"},{
	"name":"Millard Fillmore","detail":"#13. Served: 1850-1853","img":"millard_fillmore"},{
	"name":"Franklin Pierce","detail":"#14. Served: 1853-1857","img":"franklin_pierce"},{
	"name":"James Buchanan","detail":"#15. Served: 1857-1861","img":"james_buchanan"},{
	"name":"Abraham Lincoln","detail":"#16. Served: 1861-1865","img":"abraham_lincoln"},{
	"name":"Andrew Johnson","detail":"#17. Served: 1865-1869","img":"andrew_johnson"},{
	"name":"Ulysses S. Grant","detail":"#18. Served: 1869-1877","img":"ulysses_s_grant"},{
	"name":"Rutherford B. Hayes","detail":"#19. Served: 1877-1881","img":"rutherford_b_hayes"},{
	"name":"James A. Garfield","detail":"#20. Served: 1881","img":"james_garfield"},{
	"name":"Chester A. Arthur","detail":"#21. Served: 1881-1885","img":"chester_a_arthur"},{
	"name":"Grover Cleveland","detail":"#22. Served: 1885-1889. Term 1 of 2.","img":"grover_cleveland"},{
	"name":"Benjamin Harrison","detail":"#23. Served: 1889-1893","img":"benjamin_harrison"},{
	"name":"Grover Cleveland","detail":"#24. Served: 1893-1897. Term 2 of 2.","img":"grover_cleveland"},{
	"name":"William McKinley","detail":"#25. Served: 1897-1901","img":"william_mckinley"},{
	"name":"Theodore Roosevelt","detail":"#26. Served: 1901-1909","img":"theodore_roosevelt"},{
	"name":"William Howard Taft","detail":"#27. Served: 1909-1913","img":"william_howard_taft"},{
	"name":"Woodrow Wilson","detail":"#28. Served: 1913-1921","img":"woodrow_wilson"},{
	"name":"Warren G. Harding","detail":"#29. Served: 1921-1923","img":"warren_g_harding"},{
	"name":"Calvin Coolidge","detail":"#30. Served: 1923-1929","img":"calvin_coolidge"},{
	"name":"Herbert Hoover","detail":"#31. Served: 1929-1933","img":"herbert_hoover"},{
	"name":"Franklin D. Roosevelt","detail":"#32. Served: 1933-1945","img":"franklin_d_roosevelt"},{
	"name":"Harry S. Truman","detail":"#33. Served: 1945-1953","img":"harry_s_truman"},{
	"name":"Dwight D. Eisenhower","detail":"#34. Served: 1953-1961","img":"dwight_d_eisenhower"},{
	"name":"John F. Kennedy","detail":"#35. Served: 1961-1963","img":"john_f_kennedy"},{
	"name":"Lyndon B. Johnson","detail":"#36. Served: 1963-1969","img":"lyndon_b_johnson"},{
	"name":"Richard Nixon","detail":"#37. Served: 1969-1974","img":"richard_nixon"},{
	"name":"Gerald Ford","detail":"#38. Served: 1974-1977","img":"gerald_ford"},{
	"name":"Jimmy Carter","detail":"#39. Served: 1977-1981","img":"jimmy_carter"},{
	"name":"Ronald Reagan","detail":"#40. Served: 1981-1989","img":"ronald_reagan"},{
	"name":"George H. W. Bush","detail":"#41. Served: 1989-1993","img":"george_h_w_bush"},{
	"name":"Bill Clinton","detail":"#42. Served: 1993-2001","img":"bill_clinton"},{
	"name":"George W. Bush","detail":"#43. Served: 2001-2008","img":"george_w_bush"},{
	"name":"Barack Obama","detail":"#44. Served: 2008-2016","img":"barack_obama"}]
    var president = {
        generate : function() {
            return presidents[Math.floor(Math.random() * 44)].name
        },
        length : function() {
            return presidents.length
        }
    }