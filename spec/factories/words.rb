# frozen_string_literal: true

FactoryBot.define do
  factory :word do
    chinese FactoryHelper.set_chinese
    korean FactoryHelper.set_korean
  end
end
