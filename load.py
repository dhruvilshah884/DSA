import pandas as pd

# Load the CSV
df = pd.read_csv("ITEM MASTER.csv", encoding='latin1')

# Add the column
df['item_group'] = 'Products'

# Save the new file
df.to_csv("ITEM_MASTER_UPDATED.csv", index=False)
