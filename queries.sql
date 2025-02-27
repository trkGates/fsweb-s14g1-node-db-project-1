-- Posta kodu 1010 olan tüm müşterileri bulun
SELECT * FROM [Customers] where PostalCode = '1010'
-- id'si 11 olan tedarikçinin telefon numarasını bulun
SELECT Phone FROM [Suppliers] where SupplierID = 11
-- Verilen ilk 10 siparişi, sipariş tarihine göre azalan şekilde listeleyin
SELECT * FROM [Orders]  order by OrderDate desc limit 10
-- Londra, Madrid veya Brezilya'da yaşayan tüm müşterileri bulun
SELECT * FROM [Customers] where City in ('London','Madrid') or Country = 'Brazil'
-- "The Shire" için bir müşteri kaydı ekleyin, ilgili kişi adı "Bilbo Baggins", adres - "Bag End" içinde "1 Hobbit-Hole", posta kodu "111" ve ülke "Middle Earth"
insert into Customers values (117,'The Shire','Bilbo Baggins','1 Hobbit-Hole','The Shire','111','Middle Earth')
insert into Customers (CustomerName,ContactName,Address,City,PostalCode,Country) values ('The Shire','Bilbo Baggins','1 Hobbit-Hole','The Shire','111','Middle Earth')
-- Posta kodu "11122" olarak değişecek şekilde Bilbo Baggins kaydını güncelleyin
Update [Customers] set PostalCode = '11122' where ContactName = 'Bilbo Baggins'
-- (Zorlayıcı Görev) Müşteriler tablosunda kaç farklı şehrin saklandığını keşfetmek için bir sorgu bulun. Tekrarlar çift sayılmamalıdır
select DISTINCT City from Customers
select Count(DISTINCT City) from Customers
-- (Zorlayıcı Görev) 20 karakterden uzun adları olan tüm tedarikçileri bulun. Adın uzunluğunu almak için "length(SupplierName)" kullanabilirsiniz.
SELECT * FROM [Suppliers] where length(SupplierName)>20