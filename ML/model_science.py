import pickle
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import classification_report, accuracy_score
from sklearn import metrics
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier, VotingClassifier

data=pd.read_csv("Science.csv")
ip_col=["IQ","ENGLISH","MATHEMATICS","Physics","Chemistry","Biology","COMPUTER_SCIENCE"]
X=data[ip_col]
y=data["STREAM"]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25,random_state=65)

rf_model=RandomForestClassifier()
rf_model.fit(X_train, y_train)

pickle.dump(rf_model,open("model_Science.pkl","wb"))