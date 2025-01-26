from sentence_transformers import SentenceTransformer
import pandas as pd
import torch
from sklearn import preprocessing

DEVICE = "mps" if torch.backends.mps.is_available() else "cpu"

model = SentenceTransformer("all-MiniLM-L6-v2")

df = pd.read_csv("WinterClubFairClubDescriptions - Sheet1.csv")
club_name = df["Club Name"]
descriptions = df["Club Purpose/Mission Statement"].to_list()

tag_list = [
    "Community Service",
    "Professional Networking",
    "Creative Arts",
    "Technology Integration",
    "Environmental Sustainability",
    "Leadership Development",
    "Academic Support",
    "Cultural Diversity",
    "Social Events",
    "Innovation and Entrepreneurship",
    "Health and Wellness",
    "Religious and Spiritual",
    "Competitive Teams",
    "Engineering Focus",
    "Agricultural Practices",
    "Sports and Recreation",
    "Political Activism",
    "Historical Preservation",
    "Science and Research",
    "Music and Performance",
    "Advocacy and Human Rights",
    "Corporate Partnerships",
    "International Focus",
    "Equity and Inclusion",
    "STEM Education",
    "Literary and Writing",
    "Artistic Expression",
    "Financial Education",
    "Media and Communications",
    "Career Readiness",
    "Legal Education",
    "Safety and Security",
    "Volunteer Opportunities",
    "Women’s Interests",
    "Mental Health",
    "Animal Welfare",
    "Technology and Coding",
    "Outdoor Activities",
    "Family and Parenting",
    "Culinary Arts"
]

descriptions_embeddings = model.encode(descriptions, show_progress_bar=True, device=DEVICE)
tags_embedding = model.encode(tag_list, show_progress_bar=True, device=DEVICE)

similarity_matrix = model.similarity(descriptions_embeddings, tags_embedding)

min_max_scaler = preprocessing.MinMaxScaler()
scaled_similarity_matrix = min_max_scaler.fit_transform(similarity_matrix)

sim_df = pd.DataFrame(scaled_similarity_matrix, columns= tag_list)
sim_df['Club Name'] = club_name

sim_df.to_csv('return_stuff.csv', index=False)
