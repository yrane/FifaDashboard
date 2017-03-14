from elasticsearch import Elasticsearch
from elasticsearch.client import IndicesClient
import datetime
import certifi
import json


def create_index(es, index_name):
    es_indices = IndicesClient(es)
    # es_indices.create(index=index_name)
    with open('data/FifaRecords.mappings.json') as json_data:
        d = json.load(json_data)

    es_indices.create(index=index_name, body=d)
    print("Created ES index {}".format(index_name))


def write_to_index(es, index_name):
    with open('data/FifaRecords.json') as json_data:
        d = json.load(json_data)
        for line in d:
            # print line.__class__
            es.index(index=index_name, doc_type="gamestats", body=line)

    with open('data/TeamStats2.json') as json_data:
        d = json.load(json_data)
        for line in d:

            es.index(index=index_name, doc_type="teamstats", body=line)

if __name__ == "__main__":
    es = Elasticsearch(
        [
            'localhost:9200'
        ]
    )
    print "connected to ES"
    index_name = "fifa17stats"
    create_index(es, index_name)
    write_to_index(es, index_name)
