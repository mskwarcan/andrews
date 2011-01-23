class WhatsNew < ActiveRecord::Base

  acts_as_indexed :fields => [:title, :body]
  
  validates_presence_of :title
  validates_uniqueness_of :title
  
  belongs_to :image


end
