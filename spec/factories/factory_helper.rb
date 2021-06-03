# frozen_string_literal: true

module FactoryHelper
  def self.set_chinese
    %w[胖 大 凱 大胖 大大胖].sample
  end

  def self.set_korean
    %w[한 국 어].sample
  end
end