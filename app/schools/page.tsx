"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, Filter, Star, MapPin, Globe, Users, Award, BookOpen, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function SchoolsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCountry, setSelectedCountry] = useState("all")
  const [selectedCurriculum, setSelectedCurriculum] = useState("all")
  const [compareList, setCompareList] = useState<number[]>([])

  const schools = [
    {
      id: 1,
      name: "International School of Tokyo",
      location: "東京, 日本",
      country: "日本",
      rating: 4.8,
      reviews: 156,
      tuition: "¥2,500,000/年",
      currency: "JPY",
      tuitionAmount: 2500000,
      curriculum: "IB",
      image: "/placeholder.svg?height=200&width=300",
      grades: "K-12",
      students: 850,
      established: 1995,
      description: "東京の中心部に位置する国際バカロレア認定校。多様な国籍の生徒が学ぶ環境",
      languages: ["英語", "日本語", "中国語"],
      facilities: ["図書館", "科学実験室", "体育館", "プール", "音楽室"],
      accreditation: ["IB", "WASC", "CIS"],
    },
    {
      id: 2,
      name: "Singapore American School",
      location: "シンガポール",
      country: "シンガポール",
      rating: 4.9,
      reviews: 203,
      tuition: "$35,000/年",
      currency: "USD",
      tuitionAmount: 35000,
      curriculum: "AP",
      image: "/placeholder.svg?height=200&width=300",
      grades: "PreK-12",
      students: 4100,
      established: 1956,
      description: "アジア最大級のアメリカンスクール。優秀な大学進学実績を誇る",
      languages: ["英語"],
      facilities: ["最新IT設備", "オリンピックサイズプール", "劇場", "研究施設"],
      accreditation: ["WASC", "EARCOS", "NEASC"],
    },
    {
      id: 3,
      name: "British International School",
      location: "ロンドン, イギリス",
      country: "イギリス",
      rating: 4.7,
      reviews: 89,
      tuition: "£25,000/年",
      currency: "GBP",
      tuitionAmount: 25000,
      curriculum: "IGCSE",
      image: "/placeholder.svg?height=200&width=300",
      grades: "Reception-Year 13",
      students: 1200,
      established: 1971,
      description: "伝統的なブリティッシュ教育と現代的な国際教育を融合",
      languages: ["英語", "フランス語", "スペイン語"],
      facilities: ["歴史的建造物", "最新実験室", "アートスタジオ", "スポーツ複合施設"],
      accreditation: ["BSO", "CIS", "COBIS"],
    },
    {
      id: 4,
      name: "German International School",
      location: "ベルリン, ドイツ",
      country: "ドイツ",
      rating: 4.6,
      reviews: 124,
      tuition: "€18,000/年",
      currency: "EUR",
      tuitionAmount: 18000,
      curriculum: "IB",
      image: "/placeholder.svg?height=200&width=300",
      grades: "1-12",
      students: 680,
      established: 1980,
      description: "ドイツ語と英語のバイリンガル教育に特化した国際学校",
      languages: ["ドイツ語", "英語", "フランス語"],
      facilities: ["言語ラボ", "エンジニアリング工房", "環境科学センター"],
      accreditation: ["IB", "CIS", "DAS"],
    },
    {
      id: 5,
      name: "Australian International School",
      location: "シドニー, オーストラリア",
      country: "オーストラリア",
      rating: 4.5,
      reviews: 167,
      tuition: "A$28,000/年",
      currency: "AUD",
      tuitionAmount: 28000,
      curriculum: "IBMYP",
      image: "/placeholder.svg?height=200&width=300",
      grades: "K-12",
      students: 950,
      established: 1988,
      description: "オーストラリアの自然環境を活かした体験型学習プログラム",
      languages: ["英語", "中国語", "日本語"],
      facilities: ["海洋科学センター", "野外教育施設", "テクノロジーハブ"],
      accreditation: ["IB", "NEASC", "ACIS"],
    },
    {
      id: 6,
      name: "Canadian International School",
      location: "バンクーバー, カナダ",
      country: "カナダ",
      rating: 4.4,
      reviews: 98,
      tuition: "C$22,000/年",
      currency: "CAD",
      tuitionAmount: 22000,
      curriculum: "BC",
      image: "/placeholder.svg?height=200&width=300",
      grades: "K-12",
      students: 750,
      established: 1992,
      description: "カナダの多文化主義を反映した包括的な国際教育",
      languages: ["英語", "フランス語", "中国語"],
      facilities: ["アイスリンク", "スキー場アクセス", "森林教室"],
      accreditation: ["BC Ministry", "CIS", "NWAC"],
    },
  ]

  const countries = ["日本", "シンガポール", "イギリス", "ドイツ", "オーストラリア", "カナダ", "アメリカ", "フランス"]
  const curriculums = ["IB", "AP", "IGCSE", "IBMYP", "BC", "A-Level", "American"]

  const filteredSchools = schools.filter((school) => {
    const matchesSearch =
      school.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      school.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCountry = selectedCountry === "all" || school.country === selectedCountry
    const matchesCurriculum = selectedCurriculum === "all" || school.curriculum === selectedCurriculum

    return matchesSearch && matchesCountry && matchesCurriculum
  })

  const toggleCompare = (schoolId: number) => {
    setCompareList((prev) =>
      prev.includes(schoolId) ? prev.filter((id) => id !== schoolId) : prev.length < 3 ? [...prev, schoolId] : prev,
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
              <Link href="/agents" className="text-gray-700 hover:text-blue-600 transition-colors">
                エージェント
              </Link>
              <Link href="/schools" className="text-blue-600 font-semibold">
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">国際学校検索</h1>
          <p className="text-gray-600">世界トップクラスの教育機関を見つけて、お子様の未来を切り開きましょう</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="学校名で検索..."
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
            <Select value={selectedCurriculum} onValueChange={setSelectedCurriculum}>
              <SelectTrigger>
                <SelectValue placeholder="カリキュラムを選択" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">すべてのカリキュラム</SelectItem>
                {curriculums.map((curriculum) => (
                  <SelectItem key={curriculum} value={curriculum}>
                    {curriculum}
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
          <div className="fixed bottom-0 left-0 right-0 bg-green-600 text-white p-4 z-40">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="font-semibold">{compareList.length}校を比較中</span>
                <div className="flex space-x-2">
                  {compareList.map((id) => {
                    const school = schools.find((s) => s.id === id)
                    return (
                      <Badge key={id} variant="secondary" className="bg-green-500">
                        {school?.name}
                      </Badge>
                    )
                  })}
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" className="bg-white text-green-600" onClick={() => setCompareList([])}>
                  クリア
                </Button>
                <Button className="bg-green-800 hover:bg-green-900">比較する</Button>
              </div>
            </div>
          </div>
        )}

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">{filteredSchools.length}校の学校が見つかりました</p>
        </div>

        <div className="grid gap-6">
          {filteredSchools.map((school) => (
            <Card key={school.id} className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-1/4">
                    <Image
                      src={school.image || "/placeholder.svg"}
                      alt={school.name}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>

                  <div className="lg:w-3/4">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{school.name}</h3>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold">{school.rating}</span>
                            <span className="text-gray-500">({school.reviews}件)</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 mb-3">
                          <MapPin className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-600">{school.location}</span>
                        </div>
                        <p className="text-gray-600 mb-3">{school.description}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge className="bg-blue-100 text-blue-800">{school.curriculum}</Badge>
                          <Badge variant="outline">{school.grades}</Badge>
                        </div>
                      </div>

                      <div className="flex flex-col items-end space-y-2">
                        <div className="text-right">
                          <div className="text-sm text-gray-500">年間学費</div>
                          <div className="font-bold text-green-600 text-lg">{school.tuition}</div>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-blue-600" />
                        <span className="text-sm text-gray-600">生徒数: {school.students}名</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Award className="h-4 w-4 text-blue-600" />
                        <span className="text-sm text-gray-600">設立: {school.established}年</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <BookOpen className="h-4 w-4 text-blue-600" />
                        <span className="text-sm text-gray-600">認定: {school.accreditation.join(", ")}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">使用言語</h4>
                      <div className="flex flex-wrap gap-2">
                        {school.languages.map((language) => (
                          <Badge key={language} variant="secondary">
                            {language}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">主要施設</h4>
                      <div className="flex flex-wrap gap-2">
                        {school.facilities.slice(0, 4).map((facility) => (
                          <Badge key={facility} variant="outline" className="text-xs">
                            {facility}
                          </Badge>
                        ))}
                        {school.facilities.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{school.facilities.length - 4}個
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                        資料請求
                      </Button>
                      <Button variant="outline">
                        詳細を見る
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id={`compare-${school.id}`}
                          checked={compareList.includes(school.id)}
                          onCheckedChange={() => toggleCompare(school.id)}
                          disabled={!compareList.includes(school.id) && compareList.length >= 3}
                        />
                        <label htmlFor={`compare-${school.id}`} className="text-sm text-gray-600 cursor-pointer">
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
