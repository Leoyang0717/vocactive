class Collection < ApplicationRecord
  has_many :word_collections
  has_many :words, through: :word_collections
  accepts_nested_attributes_for :words, reject_if: :all_blank, allow_destroy: true
end
