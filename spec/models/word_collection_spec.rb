require 'rails_helper'

RSpec.describe WordCollection, type: :model do
  it { should belong_to(:collection) }
  it { should belong_to(:word) }
end
