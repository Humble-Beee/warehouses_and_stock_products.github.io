Consider the following situation –
There are 3 centers C1, C2 and C3 which act as warehouses and stock products in the following way:

![image](https://user-images.githubusercontent.com/54151678/120376779-e526a780-c339-11eb-86d5-c07c66ef227a.png)

One or all of these can deliver their respective products A, B, C, D, E, F, G, H or I to a customer location L1
depending upon the order request from customer. But only one delivery vehicle would be deployed (from
either C1, C2 or C3) to fulfill this request.
The distance between C1, C2, C3 and L1 is as follows

![image](https://user-images.githubusercontent.com/54151678/120376623-bc061700-c339-11eb-93a7-a753f74f9984.png)

Your task is to create an API which calculates the minimum cost to deliver any given order to location L1 with
the following conditions –
1. One and only one delivery vehicle would be deployed, either from C1, C2 or C3 to fulfill the order
2. In case orders from multiple centers need to fulfilled, this same vehicle would then pickup from different
locations and then deliver to L1. However, it is not necessary that all pickups must be made before final
delivery. It can be C1 (start)->L1 (drop)->C3 (pick up)->L1(drop).
3. The cost of running the vehicle as follows

![image](https://user-images.githubusercontent.com/54151678/120376962-1e5f1780-c33a-11eb-9e7f-55d6ca636796.png)

4. Input for API would be the quantity of each product in the order. Output would be the minimum cost to
deliver the above input quantity.
Make appropriate assumptions (if required) and state them clearly.
Here are some test cases for your reference:

• A-1, G-1, H-1, I-3 will give the output as 70

• A-1, B-1, C-1, G-1, H-1, I-1 will give the output as 118

• A-1, B-1, C-1 will give the output as 78

• A-1, B-1, C-1, D-1 will give the output as 168
