SELECT u.name as "User name", u.birthdate as "User birthdate", c.name as "Customer name"
FROM user_customer as uc
INNER JOIN user as u on u.id = uc.user_id
INNER JOIN customer as c on c.id = uc.customer_id
WHERE YEAR(CURDATE())-YEAR(u.birthdate) > 18 and u.status = 1 and c.status = 1
ORDER BY c.name ASC;