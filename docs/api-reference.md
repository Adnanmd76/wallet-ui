# 📡 API Reference

ہمارے والیٹ بیک اینڈ کے ساتھ تعامل کے لیے تمام API endpoints کی تفصیلات۔

**Base URL**: `https://api.yourwallet.com/v1`
**Authentication**: تمام ریکوئسٹس کے ہیڈر میں `Authorization: Bearer <YOUR_JWT_TOKEN>` شامل ہونا چاہیے۔

---

### 🔍 Get Wallet Balance (والیٹ بیلنس حاصل کریں)

والیٹ ایڈریس کا موجودہ بیلنس حاصل کرتا ہے۔

-   **Endpoint**: `GET /wallet/balance`
-   **Query Parameters**:
    -   `address` (string, required): وہ پبلک ایڈریس جس کا بیلنس چیک کرنا ہے۔

**Success Response (200 OK)**:
```json
{
  "address": "0x123...",
  "balance": "0.75",
  "currency": "BTC",
  "usd_value": "45000.50"
}
{
  "error": "Address not found."
}
{
  "from": "0xSender...",
  "to": "0xReceiver...",
  "amount": "0.5",
  "currency": "BTC"
}
{
  "status": "pending",
  "txHash": "0xabc123def456...",
  "message": "Transaction has been broadcasted."
}
{
  "error": "Insufficient balance."
}
