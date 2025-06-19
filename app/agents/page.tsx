"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, Filter, Star, MapPin, Globe, Users, Award, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function AgentsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCountry, setSelectedCountry] = useState("all")
  const [selectedSpecialty, setSelectedSpecialty] = useState("all")
  const [compareList, setCompareList] = useState<number[]>([])

  const agents = [
    {
      id: 1,
      name: "Global Education Partners",
      rating: 4.9,
      reviews: 1247,
      specialties: ["アメリカ", "カナダ", "イギリス"],
      countries: ["アメリカ", "カナダ", "イギリス", "オーストラリア"],
      image: "/placeholder.svg?height=200&width=300",
      consultationFee: "無料",
      successRate: "98%",
      experience: "15年",
      description: "北米・ヨーロッパの名門校への留学サポートに特化した実績豊富なエージェント",
      services: ["大学留学", "高校留学", "語学留学", "ビザサポート"],
      location: "東京・大阪・名古屋",
      established: 2008,
    },
    {
      id: 2,
      name: "International Study Connect",
      rating: 4.8,
      reviews: 892,
      specialties: ["オーストラリア", "ニュージーランド", "シンガポール"],
      countries: ["オーストラリア", "ニュージーランド", "シンガポール", "マレーシア"],
      image: "/placeholder.svg?height=200&width=300",
      consultationFee: "無料",
      successRate: "96%",
      experience: "12年",
      description: "アジア・オセアニア地域の教育移住に強みを持つ専門エージェント",
      services: ["親子留学", "教育移住", "インターナショナルスクール", "永住権サポート"],
      location: "東京・横浜",
      established: 2011,
    },
    {
      id: 3,
      name: "European Education Hub",
      rating: 4.7,
      reviews: 634,
      specialties: ["ドイツ", "フランス", "オランダ"],
      countries: ["ドイツ", "フランス", "オランダ", "スイス", "ベルギー"],
      image: "/placeholder.svg?height=200&width=300",
      consultationFee: "無料",
      successRate: "94%",
      experience: "10年",
      description: "ヨーロッパの多様な教育システムに精通した専門チーム",
      services: ["大学院留学", "研究留学", "MBA", "職業訓練"],
      location: "東京・福岡",
      established: 2013,
    },
    {
      id: 4,
      name: "Asia Pacific Education",
      rating: 4.6,
      reviews: 456,
      specialties: ["香港", "台湾", "韓国"],
      countries: ["香港", "台湾", "韓国", "中国"],
      image: "/placeholder.svg?height=200&width=300",
      consultationFee: "無料",
      successRate: "92%",
      experience: "8年",
      description: "アジア圏の教育機関との強固なネットワークを活用",
      services: ["短期留学", "交換留学", "語学研修", "文化体験"],
      location: "東京・大阪",
      established: 2015,
    },
    {
      id: 5,
      name: "Nordic Education Solutions",
      rating: 4.8,
      reviews: 321,
      specialties: ["フィンランド", "スウェーデン", "ノルウェー"],
      countries: ["フィンランド", "スウェーデン", "ノルウェー", "デンマーク"],
      image: "/placeholder.svg?height=200&width=300",
      consultationFee: "無料",
      successRate: "95%",
      experience: "7年",
      description: "北欧の先進的な教育システムへの留学をサポート",
      services: ["教育学留学", "IT留学", "デザイン留学", "起業支援"],
      location: "東京",
      established: 2016,
    },
    {
      id: 6,
      name: "Americas Education Bridge",
      rating: 4.5,
      reviews: 789,
      specialties: ["ブラジル", "アルゼンチン", "チリ"],
      countries: ["ブラジル", "アルゼンチン", "チリ", "メキシコ"],
      image: "/placeholder.svg?height=200&width=300",
      consultationFee: "無料",
      successRate: "90%",
      experience: "9年",
      description: "南米の新興教育市場への架け橋となるエージェント",
      services: ["スペイン語留学", "ポルトガル語留学", "インターンシップ", "ボランティア"],
      location: "東京・名古屋",
      established: 2014,
    },
  ]

  const countries = [
    "アメリカ",
    "カナダ",
    "イギリス",
    "オーストラリア",
    "ニュージーランド",
    "シンガポール",
    "ドイツ",
    "フランス",
    "オランダ",
  ]
  const specialties = ["大学留学", "高校留学", "親子留学", "教育移住", "語学留学", "MBA", "大学院留学"]

  const filteredAgents = agents.filter((agent) => {
    const matchesSearch =
      agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCountry = selectedCountry === "all" || agent.countries.includes(selectedCountry)
    const matchesSpecialty = selectedSpecialty === "all" || agent.services.includes(selectedSpecialty)

    return matchesSearch && matchesCountry && matchesSpecialty
  })

  const toggleCompare = (agentId: number) => {
    setCompareList((prev) =>
      prev.includes(agentId) ? prev.filter((id) => id !== agentId) : prev.length < 3 ? [...prev, agentId] : prev,
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                EduMatch Global
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/agents" className="text-blue-600 font-semibold">
                エージェント
              </Link>
              <Link href="/schools" className="text-gray-700 hover:text-blue-600 transition-colors">
                学校
              </Link>
              <Link href="/reviews" className="text-gray-700 hover:text-blue-600 transition-colors">
                レビュー
              </Link>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                無料相談
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">留学エージェント検索</h1>
          <p className="text-gray-600">信頼できるパートナーを見つけて、理想の留学を実現しましょう</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="エージェント名で検索..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger>
                <SelectValue placeholder="国を選択" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">すべての国</SelectItem>
                {countries.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
              <SelectTrigger>
                <SelectValue placeholder="専門分野を選択" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">すべての分野</SelectItem>
                {specialties.map((specialty) => (
                  <SelectItem key={specialty} value={specialty}>
                    {specialty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline" className="w-full">
              <Filter className="h-4 w-4 mr-2" />
              詳細フィルター
            </Button>
          </div>
        </div>

        {/* Compare Bar */}
        {compareList.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 bg-blue-600 text-white p-4 z-40">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="font-semibold">{compareList.length}社を比較中</span>
                <div className="flex space-x-2">
                  {compareList.map((id) => {
                    const agent = agents.find((a) => a.id === id)
                    return (
                      <Badge key={id} variant="secondary" className="bg-blue-500">
                        {agent?.name}
                      </Badge>
                    )
                  })}
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" className="bg-white text-blue-600" onClick={() => setCompareList([])}>
                  クリア
                </Button>
                <Button className="bg-blue-800 hover:bg-blue-900">比較する</Button>
              </div>
            </div>
          </div>
        )}

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">{filteredAgents.length}件のエージェントが見つかりました</p>
        </div>

        <div className="grid gap-6">
          {filteredAgents.map((agent) => (
            <Card key={agent.id} className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-1/4">
                    <Image
                      src={agent.image || "/placeholder.svg"}
                      alt={agent.name}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>

                  <div className="lg:w-3/4">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{agent.name}</h3>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold">{agent.rating}</span>
                            <span className="text-gray-500">({agent.reviews}件)</span>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-3">{agent.description}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {agent.specialties.map((specialty) => (
                            <Badge key={specialty} variant="outline" className="bg-blue-50 text-blue-700">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col items-end space-y-2">
                        <Badge className="bg-green-100 text-green-800">{agent.consultationFee}</Badge>
                        <div className="text-right">
                          <div className="text-sm text-gray-500">成功率</div>
                          <div className="font-bold text-green-600">{agent.successRate}</div>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <Award className="h-4 w-4 text-blue-600" />
                        <span className="text-sm text-gray-600">経験年数: {agent.experience}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-blue-600" />
                        <span className="text-sm text-gray-600">{agent.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-blue-600" />
                        <span className="text-sm text-gray-600">設立: {agent.established}年</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">提供サービス</h4>
                      <div className="flex flex-wrap gap-2">
                        {agent.services.map((service) => (
                          <Badge key={service} variant="secondary">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        無料相談を予約
                      </Button>
                      <Button variant="outline">
                        詳細を見る
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id={`compare-${agent.id}`}
                          checked={compareList.includes(agent.id)}
                          onCheckedChange={() => toggleCompare(agent.id)}
                          disabled={!compareList.includes(agent.id) && compareList.length >= 3}
                        />
                        <label htmlFor={`compare-${agent.id}`} className="text-sm text-gray-600 cursor-pointer">
                          比較に追加
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            さらに読み込む
          </Button>
        </div>
      </div>
    </div>
  )
}
