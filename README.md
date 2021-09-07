# EC463 Mini-Project
The CE software mini-project for BU's ENG senior design course.

## Terminal Command for Creating JSON File from Specific Search Key
curl -XPOST -H "Content-Type:application/json" -d '{"query": "022000159359", "dataType": ["Branded"], "sortBy": "fdcId", "sortOrder": "desc"}' https://api.nal.usda.gov/fdc/v1/foods/search?api_key=zoLDtB28FubnioDyjhhrgpp2rmkZAnHmf2G3QXVP -o output.json

