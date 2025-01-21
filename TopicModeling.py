import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer

df = pd.read_csv("NewScrapedData.csv")

tfidf = TfidfVectorizer(min_df = 5, max_df = .75)

doc_term_matrix = tfidf.fit_transform(df["New Description"])