import pandas as pd
import numpy as np
clubscored_df = pd.read_csv("WinterClubsScored.csv")
new_df = clubscored_df
print(clubscored_df.head(10))

top3 = []
club_names = new_df["Club Name"]
for index, row in new_df.iloc[:, :-1].iterrows():
    top3.append(row.nlargest(3).index.tolist())
final_df5 = new_df.drop(columns = "Club Name")

for i in range(len(final_df5)):
    for col in top3[i]:
        if col in final_df5.columns:
            final_df5.loc[i, col] += 1

final_df5["Club Name"] = club_names

final_df5.to_csv("FinalWinterClubScores.csv")