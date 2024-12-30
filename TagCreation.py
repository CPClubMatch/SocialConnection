import pandas as pd
import nltk
from nltk.corpus import stopwords
from pywsd.utils import lemmatize_sentence


'''Import Data'''
df = pd.read_csv("club.data.loneliness.-.Sheet1.csv")

'''Clean Up/Standardize CSV'''

def preprocessing_descs(description):
    new_description = ""
    stopwords_list = set(stopwords.words('english'))

    if not isinstance(description, str):
        return ""

    words_list = nltk.word_tokenize(description)

    for word in words_list:
        if not word.isdigit() and word.lower() not in stopwords_list:
            new_description = new_description + " " + lemmatize_sentence(word.lower())[0]
    return new_description

def preprocessing_names(name):
    new_name = ""

    if not isinstance(name, str):
        return ""

    words_list = nltk.word_tokenize(name) 

    for word in words_list:
        if not word.isdigit():
            new_name = new_name + " " + word.lower()
        else:
            new_name = new_name + " " + word
    return new_name

def main():
    df['New Club Name'] = df['Club Name'].apply(preprocessing_names)
    df['New Description'] = df['Description Excerpt'].apply(preprocessing_descs)
    df.drop('Description Excerpt', axis = 1, inplace=True)
    df.drop('Club Name', axis = 1, inplace=True)

main()

df.to_csv("CleanedUpScrapedData.csv")


'''Creating Tags'''

# for ss in wn.synsets('hike'):
#     print(ss.name(), ss.lemma_names())

# small.n.01 ['small']
# small.n.02 ['small']
# small.a.01 ['small', 'little']
# minor.s.10 ['minor', 'modest', 'small', 'small-scale', 'pocket-size',  'pocket-sized']
# little.s.03 ['little', 'small']
# small.s.04 ['small']
# humble.s.01 ['humble', 'low', 'lowly', 'modest', 'small'] 