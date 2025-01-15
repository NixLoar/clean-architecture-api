## REST API with the following features:

- Product registration
- Sales
- Purchases
- Inventory management
- Product listing

## Business Rules

### Product Registration

- Each product must have a unique identifier (e.g., SKU or Product ID)
- Products must have a name, price, and initial stock quantity
- Prices cannot be negative or zero

### Sales

- A sale cannot proceed if there is insufficient stock
- Each sale must record the product ID, quantity sold, and date/time of the transaction
- Sales may include customer information for tracking purposes
- Sales should automatically reduce inventory quantities

### Purchases

- Purchases increase the stock of a product
- Products purchased with zero or negative quantities are invalid

### Inventory Management

- The API should ensure stock levels are never negative
- It should allow for manual stock adjustments with a reason logged 
- Stock changes must always be tied to a specific event (sale, purchase, or manual adjustment)