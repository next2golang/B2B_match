"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, Globe, Users, Star, ArrowRight, TrendingUp, Award, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const featuredAgents = [
    {
      id: 1,
      name: "Global Education Partners",
      rating: 4.9,
      reviews: 1247,
      specialties: ["アメリカ", "カナダ", "イギリス"],
      image: "/placeholder.svg?height=200&width=300",
      consultationFee: "無料",
      successRate: "98%",
    },
    {
      id: 2,
      name: "International Study Connect",
      rating: 4.8,
      reviews: 892,
      specialties: ["オーストラリア", "ニュージーランド", "シンガポール"],
      image: "/placeholder.svg?height=200&width=300",
      consultationFee: "無料",
      successRate: "96%",
    },
    {
      id: 3,
      name: "European Education Hub",
      rating: 4.7,
      reviews: 634,
      specialties: ["ドイツ", "フランス", "オランダ"],
      image: "/placeholder.svg?height=200&width=300",
      consultationFee: "無料",
      successRate: "94%",
    },
  ]

  const featuredSchools = [
    {
      id: 1,
      name: "International School of Tokyo",
      location: "東京, 日本",
      rating: 4.8,
      reviews: 156,
      tuition: "¥2,500,000/年",
      curriculum: "IB",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      name: "Singapore American School",
      location: "シンガポール",
      rating: 4.9,
      reviews: 203,
      tuition: "$35,000/年",
      curriculum: "AP",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      name: "British International School",
      location: "ロンドン, イギリス",
      rating: 4.7,
      reviews: 89,
      tuition: "£25,000/年",
      curriculum: "IGCSE",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                EduMatch Global
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/agents" className="text-gray-700 hover:text-blue-600 transition-colors">
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

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              世界最高の
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                教育マッチング
              </span>
              プラットフォーム
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              信頼できる留学エージェントと世界トップクラスの国際学校を簡単に比較・検索。
              あなたの教育移住を成功に導きます。
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="国名、学校名、エージェント名で検索..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg rounded-full border-2 border-gray-200 focus:border-blue-500 shadow-lg"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600">
                  検索
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600">提携エージェント</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">1,200+</div>
                <div className="text-gray-600">国際学校</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">50,000+</div>
                <div className="text-gray-600">成功事例</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">98%</div>
                <div className="text-gray-600">満足度</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">なぜEduMatch Globalが選ばれるのか</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              最先端のテクノロジーと豊富な経験で、あなたの教育移住を完全サポート
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>一括比較・相談</CardTitle>
                <CardDescription>
                  複数のエージェントに一度に相談依頼。時間を節約し、最適な選択肢を見つけられます。
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                  <Star className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>信頼できるレビュー</CardTitle>
                <CardDescription>実際の利用者による詳細なレビューと評価で、安心して選択できます。</CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>成功率98%</CardTitle>
                <CardDescription>豊富な実績とデータに基づく最適なマッチングで、高い成功率を実現。</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Agents */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">おすすめエージェント</h2>
              <p className="text-gray-600">厳選された信頼できるパートナー</p>
            </div>
            <Link href="/agents">
              <Button variant="outline" className="group">
                すべて見る
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredAgents.map((agent, index) => (
              <Card
                key={agent.id}
                className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${index === 1 ? "md:scale-105" : ""}`}
              >
                <CardHeader className="pb-4">
                  <Image
                    src={agent.image || "/placeholder.svg"}
                    alt={agent.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {agent.consultationFee}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{agent.rating}</span>
                      <span className="text-gray-500">({agent.reviews})</span>
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-blue-600 transition-colors">{agent.name}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {agent.specialties.map((specialty) => (
                      <Badge key={specialty} variant="outline">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Award className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-gray-600">成功率 {agent.successRate}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    相談する
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Schools */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">注目の国際学校</h2>
              <p className="text-gray-600">世界トップクラスの教育機関</p>
            </div>
            <Link href="/schools">
              <Button variant="outline" className="group">
                すべて見る
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredSchools.map((school, index) => (
              <Card
                key={school.id}
                className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${index === 1 ? "md:scale-105" : ""}`}
              >
                <CardHeader className="pb-4">
                  <Image
                    src={school.image || "/placeholder.svg"}
                    alt={school.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-blue-100 text-blue-800">{school.curriculum}</Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{school.rating}</span>
                      <span className="text-gray-500">({school.reviews})</span>
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-blue-600 transition-colors">{school.name}</CardTitle>
                  <div className="flex items-center space-x-2 mt-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600">{school.location}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-600">学費</span>
                    <span className="font-semibold text-green-600">{school.tuition}</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                    詳細を見る
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">今すぐ無料相談を始めませんか？</h2>
          <p className="text-xl text-blue-100 mb-8">専門カウンセラーがあなたの教育移住プランを無料でサポートします</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              無料相談を予約
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              資料をダウンロード
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Globe className="h-6 w-6 text-blue-400" />
                <span className="text-lg font-bold">EduMatch Global</span>
              </div>
              <p className="text-gray-400">世界最高の教育マッチングプラットフォーム</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">サービス</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/agents" className="hover:text-white">
                    エージェント検索
                  </Link>
                </li>
                <li>
                  <Link href="/schools" className="hover:text-white">
                    学校検索
                  </Link>
                </li>
                <li>
                  <Link href="/reviews" className="hover:text-white">
                    レビュー
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">サポート</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/help" className="hover:text-white">
                    ヘルプセンター
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    お問い合わせ
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-white">
                    よくある質問
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">会社情報</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white">
                    会社概要
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    プライバシーポリシー
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white">
                    利用規約
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EduMatch Global. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
