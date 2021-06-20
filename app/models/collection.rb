class Collection < ApplicationRecord
  has_many :word_collections
  has_many :words, through: :word_collections
end
