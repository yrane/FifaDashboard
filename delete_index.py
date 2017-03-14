from elasticsearch import Elasticsearch
from elasticsearch.client import IndicesClient


def delete_index(index_name):
    es_indices = IndicesClient(es)
    es.indices.delete(index=index_name, ignore=[400, 404])

if __name__ == "__main__":
    es = Elasticsearch(['localhost:9200'])
    index_name = "fifa17stats"
    delete_index(index_name)
