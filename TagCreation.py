'''Import Libraries'''
import pandas as pd
import nltk
from nltk.corpus import stopwords
#from pywsd.utils import lemmatize_sentence # Commented out because it takes a while to initialize when testing
from gensim.models import Word2Vec


'''Import Data'''
df = pd.read_csv("ScrapedDataWithoutOrgs.csv")


'''Clean Up/Standardize CSV'''
def preprocessing_descs(description):
    add_to_stopwords = [".", ",", "poly", "cal", "slo", "san luis obispo", "club"]
    new_description = ""
    stopwords_set = set(stopwords.words('english'))

    for word in add_to_stopwords:
        stopwords_set.add(word)

    if not isinstance(description, str):
        return ""

    words_list = nltk.word_tokenize(description)

    for word in words_list:
        if not word.isdigit() and word.lower() not in stopwords_set:
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

def main(df):
    df['New Club Name'] = df['New Club Name'].apply(preprocessing_names)
    df['New Description'] = df['New Description'].apply(preprocessing_descs)

#main(df)
#df.to_csv("NewScrapedData.csv")


'''Creating Tags'''
cleaned_up_df = pd.read_csv('NewScrapedData.csv')

def create_vecmodel(csv_file):
    descriptions = []
    for description in csv_file['New Description']:
        descriptions.append(nltk.word_tokenize(description))
    
    model = Word2Vec(sentences=descriptions, workers=4, window=10, vector_size=200, epochs = 7, min_count=1) 
    return model

# cur_model = create_vecmodel(cleaned_up_df)
# cur_model.save('ModelOnNewData.model')

# def word_occurrance_list(csv_file):



# for ss in wn.synsets('hike'):
#     print(ss.name(), ss.lemma_names())

# small.n.01 ['small']
# small.n.02 ['small']
# small.a.01 ['small', 'little']
# minor.s.10 ['minor', 'modest', 'small', 'small-scale', 'pocket-size',  'pocket-sized']
# little.s.03 ['little', 'small']
# small.s.04 ['small']
# humble.s.01 ['humble', 'low', 'lowly', 'modest', 'small'] 